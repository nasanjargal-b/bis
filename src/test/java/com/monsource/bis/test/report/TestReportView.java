package com.monsource.bis.test.report;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.monsource.bis.report.component.ReportBuilder;
import com.monsource.bis.report.component.SvgConverter;
import com.monsource.bis.report.controller.ReportFileCtrl;
import com.monsource.bis.report.model.Report;
import com.monsource.bis.report.service.ReportService;
import com.monsource.bis.report.service.ReportViewService;
import org.apache.batik.transcoder.TranscoderException;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.WebApplicationContext;

import javax.servlet.ServletContext;

import java.io.FileOutputStream;
import java.util.Scanner;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.*;

/**
 * Created by nasanjargal on 6/18/14.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration({"classpath:context-mod.xml", "classpath:context-db.xml", "classpath:context-web.xml"})
//@TransactionConfiguration(defaultRollback = false)
public class TestReportView {

    static final String PATH = "/report-mod/report/view/";

    @Autowired
    private WebApplicationContext wac;

    private MockMvc mockMvc;

    @Autowired
    ObjectMapper objectMapper;
    @Autowired
    SvgConverter svgConverter;
    @Autowired
    ReportViewService reportViewService;
    @Autowired
    ReportService reportService;
    @Autowired
    ServletContext servletCtx;

    @Before
    public void setup() {

        this.mockMvc = webAppContextSetup(this.wac).build();
    }

    @Test
    @Transactional
    public void testSave() throws Exception {
        String path = PATH + "params.json";

        MockHttpServletRequestBuilder request = get(path);
        request.param("reportId", "15");

        String content = mockMvc.perform(request)
                .andExpect(status().isOk())
                .andReturn()
                .getResponse()
                .getContentAsString();

        System.out.println("==========================================================");
        System.out.println(content);
        System.out.println("==========================================================");

    }

    @Test
    @Transactional
    public void testView() throws Exception {
        Report report = reportService.get(6);
        String svg = getSvg();
        ReportBuilder builder = new ReportBuilder(report, reportViewService.calc(report), svgConverter.convertPNG(svg), ReportFileCtrl.FileType.HTML, null);

        builder.getJasperReport().show();
        Scanner scanner = new Scanner(System.in);
        scanner.nextLine();
    }

    public String getSvg() {
        return "<?xml version=\"1.0\" standalone=\"yes\"?><!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\"><svg width=\"786px\" height=\"298px\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\"><defs><linearGradient x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\" id=\"theme-94ae0a-6b7e07-1405666630820\"><stop offset=\"0%\" stop-color=\"#94ae0a\" stop-opacity=\"1\"></stop><stop offset=\"100%\" stop-color=\"#6b7e07\" stop-opacity=\"1\"></stop></linearGradient><linearGradient x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\" id=\"theme-115fa6-0c4578-1405666630820\"><stop offset=\"0%\" stop-color=\"#115fa6\" stop-opacity=\"1\"></stop><stop offset=\"100%\" stop-color=\"#0c4578\" stop-opacity=\"1\"></stop></linearGradient><linearGradient x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\" id=\"theme-a61120-780c17-1405666630820\"><stop offset=\"0%\" stop-color=\"#a61120\" stop-opacity=\"1\"></stop><stop offset=\"100%\" stop-color=\"#780c17\" stop-opacity=\"1\"></stop></linearGradient><linearGradient x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\" id=\"theme-ff8809-d56e00-1405666630820\"><stop offset=\"0%\" stop-color=\"#ff8809\" stop-opacity=\"1\"></stop><stop offset=\"100%\" stop-color=\"#d56e00\" stop-opacity=\"1\"></stop></linearGradient><linearGradient x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\" id=\"theme-ffd13e-ffc50b-1405666630820\"><stop offset=\"0%\" stop-color=\"#ffd13e\" stop-opacity=\"1\"></stop><stop offset=\"100%\" stop-color=\"#ffc50b\" stop-opacity=\"1\"></stop></linearGradient><linearGradient x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\" id=\"theme-a61187-780c61-1405666630820\"><stop offset=\"0%\" stop-color=\"#a61187\" stop-opacity=\"1\"></stop><stop offset=\"100%\" stop-color=\"#780c61\" stop-opacity=\"1\"></stop></linearGradient><linearGradient x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\" id=\"theme-24ad9a-1b8374-1405666630820\"><stop offset=\"0%\" stop-color=\"#24ad9a\" stop-opacity=\"1\"></stop><stop offset=\"100%\" stop-color=\"#1b8374\" stop-opacity=\"1\"></stop></linearGradient><linearGradient x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\" id=\"theme-7c7474-625b5b-1405666630820\"><stop offset=\"0%\" stop-color=\"#7c7474\" stop-opacity=\"1\"></stop><stop offset=\"100%\" stop-color=\"#625b5b\" stop-opacity=\"1\"></stop></linearGradient><linearGradient x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\" id=\"theme-a66111-78460c-1405666630820\"><stop offset=\"0%\" stop-color=\"#a66111\" stop-opacity=\"1\"></stop><stop offset=\"100%\" stop-color=\"#78460c\" stop-opacity=\"1\"></stop></linearGradient></defs><rect width=\"100%\" height=\"100%\" fill=\"#fff\" fill-opacity=\"0\" stroke=\"none\" /><path d=\"M 438.3499068621831 85.895320536203A 139 139 0 0 1 453.5 149L 453.5 149A 139 139 0 0 1 438.3499068621831 212.10467946379697L 438.3499068621831 212.10467946379697L 351.65497205865495 167.9314038391391A 41.7 41.7 0 0 0 356.2 149L 356.2 149A 41.7 41.7 0 0 0 351.65497205865495 130.0685961608609L 351.65497205865495 130.0685961608609Z\" fill=\"none\" stroke=\"rgb(200, 200, 200)\" stroke-width=\"6\" stroke-opacity=\"1\" z-index=\"0\" transform=\"matrix(1,0,0,1,1.2,2)\" /><path d=\"M 438.3499068621831 85.895320536203A 139 139 0 0 1 453.5 149L 453.5 149A 139 139 0 0 1 438.3499068621831 212.10467946379697L 438.3499068621831 212.10467946379697L 351.65497205865495 167.9314038391391A 41.7 41.7 0 0 0 356.2 149L 356.2 149A 41.7 41.7 0 0 0 351.65497205865495 130.0685961608609L 351.65497205865495 130.0685961608609Z\" fill=\"none\" stroke=\"rgb(150, 150, 150)\" stroke-width=\"4\" stroke-opacity=\"1\" z-index=\"0\" transform=\"matrix(1,0,0,1,0.9,1.5)\" /><path d=\"M 438.3499068621831 85.895320536203A 139 139 0 0 1 453.5 149L 453.5 149A 139 139 0 0 1 438.3499068621831 212.10467946379697L 438.3499068621831 212.10467946379697L 351.65497205865495 167.9314038391391A 41.7 41.7 0 0 0 356.2 149L 356.2 149A 41.7 41.7 0 0 0 351.65497205865495 130.0685961608609L 351.65497205865495 130.0685961608609Z\" fill=\"none\" stroke=\"rgb(100, 100, 100)\" stroke-width=\"2\" stroke-opacity=\"1\" z-index=\"0\" transform=\"matrix(1,0,0,1,0.6,1)\" /><path d=\"M 412.78784258493 247.28784258493022A 139 139 0 0 1 177.21132065727588 127.25560935940783L 177.21132065727588 127.25560935940783A 139 139 0 0 1 438.3499068621831 85.895320536203L 438.3499068621831 85.895320536203L 351.65497205865495 130.0685961608609A 41.7 41.7 0 0 0 273.3133961971828 142.47668280782236L 273.3133961971828 142.47668280782236A 41.7 41.7 0 0 0 343.986352775479 178.48635277547908L 343.986352775479 178.48635277547908Z\" fill=\"none\" stroke=\"rgb(200, 200, 200)\" stroke-width=\"6\" stroke-opacity=\"1\" z-index=\"0\" transform=\"matrix(1,0,0,1,1.2,2)\" /><path d=\"M 412.78784258493 247.28784258493022A 139 139 0 0 1 177.21132065727588 127.25560935940783L 177.21132065727588 127.25560935940783A 139 139 0 0 1 438.3499068621831 85.895320536203L 438.3499068621831 85.895320536203L 351.65497205865495 130.0685961608609A 41.7 41.7 0 0 0 273.3133961971828 142.47668280782236L 273.3133961971828 142.47668280782236A 41.7 41.7 0 0 0 343.986352775479 178.48635277547908L 343.986352775479 178.48635277547908Z\" fill=\"none\" stroke=\"rgb(150, 150, 150)\" stroke-width=\"4\" stroke-opacity=\"1\" z-index=\"0\" transform=\"matrix(1,0,0,1,0.9,1.5)\" /><path d=\"M 412.78784258493 247.28784258493022A 139 139 0 0 1 177.21132065727588 127.25560935940783L 177.21132065727588 127.25560935940783A 139 139 0 0 1 438.3499068621831 85.895320536203L 438.3499068621831 85.895320536203L 351.65497205865495 130.0685961608609A 41.7 41.7 0 0 0 273.3133961971828 142.47668280782236L 273.3133961971828 142.47668280782236A 41.7 41.7 0 0 0 343.986352775479 178.48635277547908L 343.986352775479 178.48635277547908Z\" fill=\"none\" stroke=\"rgb(100, 100, 100)\" stroke-width=\"2\" stroke-opacity=\"1\" z-index=\"0\" transform=\"matrix(1,0,0,1,0.6,1)\" /><path d=\"M 438.34990686218305 212.10467946379714A 139 139 0 0 1 426.9533622181176 230.7021500686539L 426.9533622181176 230.7021500686539A 139 139 0 0 1 412.78784258493 247.28784258493022L 412.78784258493 247.28784258493022L 343.986352775479 178.48635277547908A 41.7 41.7 0 0 0 348.2360086654353 173.51064502059617L 348.2360086654353 173.51064502059617A 41.7 41.7 0 0 0 351.6549720586549 167.93140383913914L 351.6549720586549 167.93140383913914Z\" fill=\"none\" stroke=\"rgb(200, 200, 200)\" stroke-width=\"6\" stroke-opacity=\"1\" z-index=\"0\" transform=\"matrix(1,0,0,1,1.2,2)\" /><path d=\"M 438.34990686218305 212.10467946379714A 139 139 0 0 1 426.9533622181176 230.7021500686539L 426.9533622181176 230.7021500686539A 139 139 0 0 1 412.78784258493 247.28784258493022L 412.78784258493 247.28784258493022L 343.986352775479 178.48635277547908A 41.7 41.7 0 0 0 348.2360086654353 173.51064502059617L 348.2360086654353 173.51064502059617A 41.7 41.7 0 0 0 351.6549720586549 167.93140383913914L 351.6549720586549 167.93140383913914Z\" fill=\"none\" stroke=\"rgb(150, 150, 150)\" stroke-width=\"4\" stroke-opacity=\"1\" z-index=\"0\" transform=\"matrix(1,0,0,1,0.9,1.5)\" /><path d=\"M 438.34990686218305 212.10467946379714A 139 139 0 0 1 426.9533622181176 230.7021500686539L 426.9533622181176 230.7021500686539A 139 139 0 0 1 412.78784258493 247.28784258493022L 412.78784258493 247.28784258493022L 343.986352775479 178.48635277547908A 41.7 41.7 0 0 0 348.2360086654353 173.51064502059617L 348.2360086654353 173.51064502059617A 41.7 41.7 0 0 0 351.6549720586549 167.93140383913914L 351.6549720586549 167.93140383913914Z\" fill=\"none\" stroke=\"rgb(100, 100, 100)\" stroke-width=\"2\" stroke-opacity=\"1\" z-index=\"0\" transform=\"matrix(1,0,0,1,0.6,1)\" /><path d=\"M 438.3499068621831 85.895320536203A 139 139 0 0 1 453.5 149L 453.5 149A 139 139 0 0 1 438.3499068621831 212.10467946379697L 438.3499068621831 212.10467946379697L 351.65497205865495 167.9314038391391A 41.7 41.7 0 0 0 356.2 149L 356.2 149A 41.7 41.7 0 0 0 351.65497205865495 130.0685961608609L 351.65497205865495 130.0685961608609Z\" fill=\"url(#theme-94ae0a-6b7e07-1405666630820)\" stroke-width=\"0px\" z-index=\"0\" transform=\"matrix(1,0,0,1,0,0)\" /><path d=\"M 412.78784258493 247.28784258493022A 139 139 0 0 1 177.21132065727588 127.25560935940783L 177.21132065727588 127.25560935940783A 139 139 0 0 1 438.3499068621831 85.895320536203L 438.3499068621831 85.895320536203L 351.65497205865495 130.0685961608609A 41.7 41.7 0 0 0 273.3133961971828 142.47668280782236L 273.3133961971828 142.47668280782236A 41.7 41.7 0 0 0 343.986352775479 178.48635277547908L 343.986352775479 178.48635277547908Z\" fill=\"url(#theme-115fa6-0c4578-1405666630820)\" stroke-width=\"0px\" z-index=\"0\" transform=\"matrix(1,0,0,1,0,0)\" /><path d=\"M 438.34990686218305 212.10467946379714A 139 139 0 0 1 426.9533622181176 230.7021500686539L 426.9533622181176 230.7021500686539A 139 139 0 0 1 412.78784258493 247.28784258493022L 412.78784258493 247.28784258493022L 343.986352775479 178.48635277547908A 41.7 41.7 0 0 0 348.2360086654353 173.51064502059617L 348.2360086654353 173.51064502059617A 41.7 41.7 0 0 0 351.6549720586549 167.93140383913914L 351.6549720586549 167.93140383913914Z\" fill=\"url(#theme-a61120-780c17-1405666630820)\" stroke-width=\"0px\" z-index=\"0\" transform=\"matrix(1,0,0,1,0,0)\" /><text x=\"404.85\" y=\"149\" font-size=\"11\" font-family=\"Helvetica, sans-serif\" text-anchor=\"middle\" fill=\"#333333\" transform=\"matrix(1,0,0,1,0,0)\" ><tspan x=\"404.85\" dy=\"2.75\">Таун Хаус орон сууц</tspan></text><text x=\"225.26235842722932\" y=\"134.8661460836151\" font-size=\"11\" font-family=\"Helvetica, sans-serif\" text-anchor=\"middle\" fill=\"#cccccc\" transform=\"matrix(0.9877,0.1564,-0.1564,0.9877,23.8711,-33.5784)\" ><tspan x=\"225.26235842722932\" dy=\"2.75\">Нийтийн орон сууц</tspan></text><text x=\"387.59468544177645\" y=\"202.10639754462503\" font-size=\"11\" font-family=\"Helvetica, sans-serif\" text-anchor=\"middle\" fill=\"#cccccc\" transform=\"matrix(0.809,0.5878,-0.5878,0.809,192.8192,-189.2236)\" ><tspan x=\"387.59468544177645\" dy=\"2.75\">Амины орон сууц</tspan></text><rect x=\"629.5\" y=\"112.5\" width=\"147\" height=\"73\" fill=\"#FFF\" stroke=\"#000\" stroke-width=\"1\" transform=\"matrix(1,0,0,1,0,0)\" /><text x=\"655\" y=\"125\" font-size=\"12\" font-family=\"Helvetica, sans-serif\" fill=\"#000\" transform=\"matrix(1,0,0,1,0,0)\" ><tspan x=\"655\" dy=\"3\">Таун Хаус орон сууц</tspan></text><rect x=\"0\" y=\"0\" width=\"12\" height=\"12\" fill=\"url(#theme-94ae0a-6b7e07-1405666630820)\" transform=\"matrix(1,0,0,1,635,119)\" /><text x=\"655\" y=\"149\" font-size=\"12\" font-family=\"Helvetica, sans-serif\" fill=\"#000\" transform=\"matrix(1,0,0,1,0,0)\" ><tspan x=\"655\" dy=\"3\">Нийтийн орон сууц</tspan></text><rect x=\"0\" y=\"0\" width=\"12\" height=\"12\" fill=\"url(#theme-115fa6-0c4578-1405666630820)\" transform=\"matrix(1,0,0,1,635,143)\" /><text x=\"655\" y=\"173\" font-size=\"12\" font-family=\"Helvetica, sans-serif\" fill=\"#000\" transform=\"matrix(1,0,0,1,0,0)\" ><tspan x=\"655\" dy=\"3\">Амины орон сууц</tspan></text><rect x=\"0\" y=\"0\" width=\"12\" height=\"12\" fill=\"url(#theme-a61120-780c17-1405666630820)\" transform=\"matrix(1,0,0,1,635,167)\" /></svg>";
    }
}
