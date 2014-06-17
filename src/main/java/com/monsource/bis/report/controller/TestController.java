package com.monsource.bis.report.controller;

import com.monsource.bis.report.service.ReportGeneratorService;
import org.hibernate.SessionFactory;
import org.hibernate.internal.SessionImpl;
import org.hibernate.transform.Transformers;
import org.pentaho.reporting.engine.classic.core.*;
import org.pentaho.reporting.engine.classic.core.modules.misc.datafactory.sql.SQLReportDataFactory;
import org.pentaho.reporting.engine.classic.core.modules.misc.datafactory.sql.SimpleSQLReportDataFactory;
import org.pentaho.reporting.engine.classic.core.modules.output.pageable.pdf.PdfReportUtil;
import org.pentaho.reporting.engine.classic.core.modules.output.table.html.HtmlReportUtil;
import org.pentaho.reporting.engine.classic.core.modules.output.table.xls.ExcelReportUtil;
import org.pentaho.reporting.engine.classic.core.parameters.DefaultListParameter;
import org.pentaho.reporting.engine.classic.core.parameters.DefaultParameterDefinition;
import org.pentaho.reporting.engine.classic.core.parameters.ParameterDefinitionEntry;
import org.pentaho.reporting.engine.classic.core.parameters.PlainParameter;
import org.pentaho.reporting.engine.classic.core.wizard.RelationalAutoGeneratorPreProcessor;
import org.pentaho.reporting.engine.classic.extensions.datasources.hibernate.HQLDataFactory;
import org.pentaho.reporting.libraries.resourceloader.Resource;
import org.pentaho.reporting.libraries.resourceloader.ResourceException;
import org.pentaho.reporting.libraries.resourceloader.ResourceManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletResponse;
import javax.swing.table.DefaultTableModel;
import java.io.File;
import java.io.IOException;
import java.net.URL;
import java.util.List;
import java.util.Map;
import java.util.Vector;

/**
 * Created by nasanjargal on 6/13/14.
 */
@Controller
@RequestMapping("/test-mod")
public class TestController {

    @Autowired
    SessionFactory factory;
    @Autowired
    ServletContext context;
    @Autowired
    ReportGeneratorService reportGenerator;

    @RequestMapping("testB01.html")
    public void report(Integer q1F, Integer q1T, ReportType type, Integer cityId, HttpServletResponse response) throws ResourceException, IOException, ReportProcessingException {

        URL reportDefinitionURL = context.getResource("/WEB-INF/report/B01.prpt");

        ResourceManager resourceManager = new ResourceManager();
        resourceManager.registerDefaults();
        Resource directly = resourceManager.createDirectly(reportDefinitionURL, MasterReport.class);
        MasterReport report = (MasterReport) directly.getResource();

        SQLReportDataFactory sqlDataFactory = new SQLReportDataFactory(((SessionImpl) factory.getCurrentSession()).connection());
        sqlDataFactory.setQuery("reportQuery", "SELECT\n" +
                "     sum(\"bdata\".\"b01\".\"q1\") AS q1,\n" +
                "     \"public\".\"city\".\"name\" AS city_name\n" +
                "FROM\n" +
                "     \"public\".\"city\" INNER JOIN \"bdata\".\"b01\" ON \"public\".\"city\".\"id\" = \"bdata\".\"b01\".\"city_id\"\n" +
                "     AND \"bdata\".\"b01\".\"city_id\" = \"public\".\"city\".\"id\"\n" +
                "WHERE\n" +
                "     \"public\".\"city\".\"id\" = ${city_id}\n" +
                "GROUP BY\n" +
                "     \"public\".\"city\".\"name\"\n" +
                "HAVING\n" +
                "     sum(\"bdata\".\"b01\".\"q1\") >= ${q1_f}\n" +
                " AND sum(\"bdata\".\"b01\".\"q1\") <= ${q1_t}");
        report.setDataFactory(sqlDataFactory);
        report.setQuery("reportQuery");

        DefaultParameterDefinition parameterDef = new DefaultParameterDefinition();

        parameterDef.addParameterDefinition(new PlainParameter("city_id",Integer.class));
        parameterDef.addParameterDefinition(new PlainParameter("q1_f",Integer.class));
        parameterDef.addParameterDefinition(new PlainParameter("q1_t",Integer.class));

        report.setParameterDefinition(parameterDef);

        report.getParameterValues().put("city_id", cityId);
        report.getParameterValues().put("q1_f", q1F);
        report.getParameterValues().put("q1_t", q1T);

//        report.setParameterDefinition(params);

        reportGenerator.generate("bataa", "BA01", type, response, report);
    }

    @RequestMapping("test.html")
    public void test(ReportType type, HttpServletResponse response) throws IOException, ReportProcessingException {

        List<Map> results = factory.getCurrentSession().createSQLQuery("SELECT * FROM bdata.b01")
                .setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP).list();

        MasterReport report = new MasterReport();

        report.addPreProcessor(new RelationalAutoGeneratorPreProcessor());

        DefaultTableModel tableModel = new DefaultTableModel();
        tableModel.setColumnIdentifiers(results.get(0).keySet().toArray());

        for (Map result : results) {

            Vector row = new Vector();

            for (Object key : result.keySet()) {
                row.add(result.get(key));
            }

            tableModel.addRow(row);
        }


        report.setDataFactory(new TableDataFactory("Sample4Query", tableModel));
        report.setQuery("Sample4Query");

        reportGenerator.generate("bataa", "BA01", type, response, report);

    }

}
