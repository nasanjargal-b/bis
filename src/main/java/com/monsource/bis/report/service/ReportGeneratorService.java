package com.monsource.bis.report.service;

import com.monsource.bis.report.controller.ReportType;
import org.pentaho.reporting.engine.classic.core.MasterReport;
import org.pentaho.reporting.engine.classic.core.ReportProcessingException;
import org.pentaho.reporting.engine.classic.core.modules.output.pageable.pdf.PdfReportUtil;
import org.pentaho.reporting.engine.classic.core.modules.output.table.html.HtmlReportUtil;
import org.pentaho.reporting.engine.classic.core.modules.output.table.xls.ExcelReportUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;

/**
 * Created by nasanjargal on 6/15/14.
 */
@Service
public class ReportGeneratorService {

    @Autowired
    ServletContext context;

    public void generate(String username, String reportName, ReportType type, HttpServletResponse response, MasterReport report) throws IOException, ReportProcessingException {
        switch (type) {
            case HTML:
                generateHTML(username, reportName, response, report);
                break;
            case PDF:
                generatePdf(reportName, response, report);
                break;
            case XLSX:
                generateXlsx(reportName, response, report);
                break;
        }
    }

    private void generateXlsx(String reportName, HttpServletResponse response, MasterReport report) throws IOException, ReportProcessingException {
        response.setContentType("application/xlsx");
        response.setHeader("Content-Disposition", "attachment; filename=" + reportName + ".xlsx");
        ExcelReportUtil.createXLSX(report, response.getOutputStream());
    }

    private void generatePdf(String reportName, HttpServletResponse response, MasterReport report) throws IOException, ReportProcessingException {
        response.setContentType("application/pdf");
        response.setHeader("Content-Disposition", "attachment; filename=" + reportName + ".pdf");
        PdfReportUtil.createPDF(report, response.getOutputStream());
    }

    private void generateHTML(String username, String reportName, HttpServletResponse response, MasterReport report) throws IOException, ReportProcessingException {
        long time = new Date().getTime();
        String path = "/report-gen/" + username + "/" + reportName + "/" + time + "/";
        String reportPath = context.getRealPath(path);
        File file = new File(reportPath);
        file.mkdirs();
        response.setContentType("text/html");
        HtmlReportUtil.createDirectoryHTML(report, reportPath + "/index.html");

        PrintWriter writer = response.getWriter();
        writer.println("<html>");
        writer.println("<head>");
        writer.println("<style>");
        writer.println("#r" + time + "{");
        writer.println("\n" +
                "    position: fixed;\n" +
                "    top: 0px;\n" +
                "    left: 0px;\n" +
                "    width: 100%;\n" +
                "    height: 100%;\n" +
                "    border: none;\n");
        writer.println("};");
        writer.println("</style>");
        writer.println("</head>");
        writer.println("<body>");
        writer.println("<iframe id=\"r" + time + "\" src=\"" + path + "\" ></iframe>");
        writer.println("</body>");
        writer.println("</html>");

//        response.sendRedirect(path);
    }

}
