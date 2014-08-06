package com.monsource.bis.report.controller;

import com.monsource.bis.data.entity.type.ReportType;
import com.monsource.bis.report.component.ReportBuilder;
import com.monsource.bis.report.component.SvgConverter;
import com.monsource.bis.report.model.Report;
import com.monsource.bis.report.service.ReportService;
import com.monsource.bis.report.service.ReportViewService;
import net.sf.dynamicreports.jasper.builder.JasperReportBuilder;
import net.sf.dynamicreports.report.exception.DRException;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.export.HtmlExporter;
import net.sf.jasperreports.engine.export.ooxml.JRDocxExporter;
import net.sf.jasperreports.engine.export.ooxml.JRXlsxExporter;
import net.sf.jasperreports.export.SimpleExporterInput;
import net.sf.jasperreports.export.SimpleHtmlExporterConfiguration;
import net.sf.jasperreports.export.SimpleHtmlExporterOutput;
import net.sf.jasperreports.export.SimpleOutputStreamExporterOutput;
import net.sf.jasperreports.j2ee.servlets.ImageServlet;
import net.sf.jasperreports.web.util.WebHtmlResourceHandler;
import org.apache.batik.transcoder.TranscoderException;
import org.apache.commons.dbcp.BasicDataSource;
import org.apache.commons.io.IOUtils;
import org.jdom2.Document;
import org.jdom2.JDOMException;
import org.jdom2.input.SAXBuilder;
import org.jdom2.output.Format;
import org.jdom2.output.SAXOutputter;
import org.jdom2.output.XMLOutputter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.swing.text.html.HTML;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URLEncoder;
import java.sql.Connection;
import java.sql.DriverManager;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by nasanjargal on 7/17/14.
 */
@Controller
@RequestMapping("/report-mod/view")
public class ReportFileCtrl {

    public static enum FileType {
        XLSX,
        DOCX,
        PDF,
        HTML
    }

    @Autowired
    SvgConverter svgConverter;
    @Autowired
    ReportViewService reportViewService;
    @Autowired
    ReportService reportService;
    @Autowired
    ServletContext servletCtx;
    @Autowired
    HttpSession session;
    @Autowired
    ServletContext context;
    @Autowired
    BasicDataSource dataSource;

    @RequestMapping(value = "file.html", method = {RequestMethod.POST, RequestMethod.GET})
    public void download(Integer reportId, Integer districtId, FileType type, String svg, HttpServletResponse response) throws Exception {
        Report report = reportService.get(reportId);
        buildReport(report, districtId, type, svg, response);
    }

    @RequestMapping(value = "preview.html", method = {RequestMethod.POST, RequestMethod.GET})
    public void download(@RequestBody Report report, HttpServletResponse response) throws Exception {
        buildReport(report, null, FileType.HTML, null, response);
    }

    private void buildReport(Report report, Integer districtId, FileType type, String svg, HttpServletResponse response) throws Exception {

        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        DateFormat df = new SimpleDateFormat("yyyyMMdd");
        String name = report.getName() + "_" + df.format(new Date());

        if (report.getType() == ReportType.JASPER) {

            Connection connection = dataSource.getConnection();
            String filePath = context.getRealPath("/WEB-INF/report/" + report.getFile());
            JasperPrint jasperPrint = JasperFillManager.fillReport(filePath, new HashMap(), connection);

            switch (type) {
                case HTML:
                    HtmlExporter exporter = new HtmlExporter();
                    exporter.setExporterInput(new SimpleExporterInput(jasperPrint));
                    SimpleHtmlExporterOutput exporterOutput = new SimpleHtmlExporterOutput(outputStream);
                    exporterOutput.setImageHandler(new WebHtmlResourceHandler("image?image={0}"));
                    exporter.setExporterOutput(exporterOutput);
                    SimpleHtmlExporterConfiguration configuration = new SimpleHtmlExporterConfiguration();
                    configuration.setHtmlHeader("");
                    configuration.setHtmlFooter("");
                    exporter.setConfiguration(configuration);
                    session.setAttribute(ImageServlet.DEFAULT_JASPER_PRINT_SESSION_ATTRIBUTE, jasperPrint);
                    exporter.exportReport();
                    break;
                case DOCX:
                    JRDocxExporter docxExporter = new JRDocxExporter();
                    docxExporter.setExporterInput(new SimpleExporterInput(jasperPrint));
                    docxExporter.setExporterOutput(new SimpleOutputStreamExporterOutput(outputStream));
                    docxExporter.exportReport();
                    break;
                case XLSX:
                    JRXlsxExporter xlsxExporter = new JRXlsxExporter();
                    xlsxExporter.setExporterInput(new SimpleExporterInput(jasperPrint));
                    xlsxExporter.setExporterOutput(new SimpleOutputStreamExporterOutput(outputStream));
                    xlsxExporter.exportReport();
                    break;
                case PDF:
                    break;
            }
        } else {
            List<Map> datas = reportViewService.calc(report, districtId);

            InputStream imageInput = svgConverter.convertPNG(svg);

            ReportBuilder reportBuilder = new ReportBuilder(report, datas, imageInput, type, servletCtx);

            if (type != FileType.HTML)
                response.setContentType("application/octet-stream");
            else
                response.setContentType("text/html");

            reportBuilder.build(outputStream);
        }

        name = URLEncoder.encode(name, "UTF-8").replace("+", "%20");

        switch (type) {
            case PDF:
                response.setHeader("Content-Disposition", "attachment;filename=\"" + name + ".pdf\"");
                break;
            case DOCX:
                response.setHeader("Content-Disposition", "attachment;filename=\"" + name + ".docx\"");
                break;
            case XLSX:
                response.setHeader("Content-Disposition", "attachment;filename=\"" + name + ".xlsx\"");
                break;
            case HTML:
                if (report.getChart() != null && report.getType() != ReportType.JASPER)
                    outputStream = createChartDiv(outputStream);
                break;
        }

        IOUtils.copy(new ByteArrayInputStream(outputStream.toByteArray()), response.getOutputStream());
    }

    private ByteArrayOutputStream createChartDiv(ByteArrayOutputStream outputStream) throws JDOMException, IOException {

        String str = new String(outputStream.toByteArray());


        str = str.replace("<td style=\"border: 1px solid #000000; \"><img alt=\"\" src=\"/resources/report/px\" border=\"0\"/></td>", "<td style=\"border: 1px solid #000000; \"><div id=\"chart\"></div></td>");
        byte[] bytes = str.getBytes();

        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream(bytes.length);
        byteArrayOutputStream.write(bytes);
        return byteArrayOutputStream;
    }

}
