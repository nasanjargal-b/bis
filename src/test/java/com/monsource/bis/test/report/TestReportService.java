package com.monsource.bis.test.report;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.monsource.bis.data.entity.type.ReportQuestionType;
import com.monsource.bis.report.model.Column;
import com.monsource.bis.report.model.Report;
import com.monsource.bis.report.service.ReportQueryService;
import com.monsource.bis.report.service.ReportService;
import com.monsource.bis.report.service.ReportViewService;
import org.hibernate.*;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.webAppContextSetup;

/**
 * Created by nasanjargal on 6/18/14.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration({"classpath:context-mod.xml", "classpath:context-db.xml", "classpath:context-web.xml"})
public class TestReportService {

    @Autowired
    ReportViewService reportViewService;
    @Autowired
    ReportService reportService;
    @Autowired
    ReportQueryService reportQueryService;

    @Autowired
    SessionFactory sessionFactory;

    @Autowired
    ObjectMapper objectMapper;

    @Test
    @Transactional
    public void testGetData() throws Exception {

        List<Map> data = reportViewService.calc(6, null);

        System.out.println(data.size());

        objectMapper.writeValue(System.out, data);
        System.out.println();
    }

    @Test
    @Transactional
    public void testQuery() throws Exception {

        List<Column> columns = reportQueryService.queryMetaData(reportService.get(10));
        System.out.println(columns.size());
        for (Column column : columns) {
            System.out.println(column.getCode());
        }

    }

    @Test
    @Transactional
    public void testSaveData() throws Exception {

        String data = "{\n" +
                "    \"id\": null,\n" +
                "    \"name\": \"R03\",\n" +
                "    \"parentId\": null,\n" +
                "    \"blankId\": \"B01\",\n" +
                "    \"chart\": null,\n" +
                "    \"chartCategory\": null,\n" +
                "    \"order\": null,\n" +
                "    \"columns\": [\n" +
                "        {\n" +
                "            \"id\": null,\n" +
                "            \"name\": \"\\u0425\\u043e\\u0442/\\u0410\\u0439\\u043c\\u0430\\u0433\",\n" +
                "            \"code\": \"$C\",\n" +
                "            \"type\": \"CITY\",\n" +
                "            \"percent\": null,\n" +
                "            \"calcType\": \"NORMAL\",\n" +
                "            \"columnType\": \"TEXT\",\n" +
                "            \"questionId\": null,\n" +
                "            \"filter\": \"\",\n" +
                "            \"choiceId\": null\n" +
                "        },\n" +
                "        {\n" +
                "            \"id\": null,\n" +
                "            \"name\": \"\\u0422\\u043e\\u043e\",\n" +
                "            \"code\": \"Q4_2_1\",\n" +
                "            \"type\": \"QUESTION\",\n" +
                "            \"percent\": null,\n" +
                "            \"calcType\": \"NORMAL\",\n" +
                "            \"columnType\": \"NUMERIC\",\n" +
                "            \"questionId\": 101,\n" +
                "            \"filter\": \"\",\n" +
                "            \"choiceId\": null\n" +
                "        }\n" +
                "    ],\n" +
                "    \"filters\": [],\n" +
                "    \"chartSerieses\": []\n" +
                "}";
        Report report = objectMapper.readValue(data, Report.class);

        reportService.save(report);
    }
}