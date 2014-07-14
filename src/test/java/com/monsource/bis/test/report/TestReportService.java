package com.monsource.bis.test.report;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.monsource.bis.data.entity.RecordEntity;
import com.monsource.bis.report.service.ReportViewService;
import org.hibernate.*;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.hibernate.sql.JoinType;
import org.hibernate.transform.Transformers;
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
    SessionFactory sessionFactory;

    @Autowired
    ObjectMapper objectMapper;

    @Test
    @Transactional
    public void testGetData() throws Exception {

        List<Map> data = reportViewService.calc(6);

        System.out.println(data.size());

        objectMapper.writeValue(System.out, data);
        System.out.println();
    }
}
