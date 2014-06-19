package com.monsource.bis.test.report;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.transaction.TransactionConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMultipartHttpServletRequestBuilder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.WebApplicationContext;

import java.io.FileInputStream;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.*;

/**
 * Created by nasanjargal on 6/16/14.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration({"classpath:context-mod.xml", "classpath:context-db.xml", "classpath:context-web.xml"})
//@TransactionConfiguration(defaultRollback = false)
public class TestReportCtrl {

    static final String PATH = "/report-mod/report/";

    @Autowired
    private WebApplicationContext wac;

    private MockMvc mockMvc;

    @Autowired
    ObjectMapper objectMapper;

    @Before
    public void setup() {

        this.mockMvc = webAppContextSetup(this.wac).build();
    }

    @Test
    @Transactional
    public void testSave() throws Exception {
        String path = PATH + "report.json";

        FileInputStream fis = new FileInputStream("/media/d/My Project/bis/WebBis/src/main/webapp/WEB-INF/report/B01.prpt");
        MockMultipartFile multipartFile = new MockMultipartFile("file", fis);

        MockMultipartHttpServletRequestBuilder request = fileUpload(path);
        request.param("id", "12");
        request.param("name", "R01");
        request.param("reportGroupId", "1");
        request.param("order", "1");

        request.param("queries[0].id", "11");
        request.param("queries[0].name", "Test1");
        request.param("queries[0].query", "SELECT * FROM bdata.b01");

        request.param("queries[0].params[0].id", "25");
        request.param("queries[0].params[0].name", "q1_f");
        request.param("queries[0].params[0].label", "From");
        request.param("queries[0].params[0].type", "INTEGER");
        request.param("queries[0].params[0].order", "0");

        request.param("queries[0].params[1].id", "29");
        request.param("queries[0].params[1].name", "q1_k");
        request.param("queries[0].params[1].label", "To");
        request.param("queries[0].params[1].type", "INTEGER");
        request.param("queries[0].params[1].order", "0");

        request.param("queries[1].id", "12");
        request.param("queries[1].name", "Test2");
        request.param("queries[1].query", "SELECT * FROM bdata.b01 where city_id = ${city_id}");

        request.param("queries[1].params[0].id", "27");
        request.param("queries[1].params[0].name", "q1_f");
        request.param("queries[1].params[0].label", "From");
        request.param("queries[1].params[0].type", "INTEGER");
        request.param("queries[1].params[0].order", "0");

        request.param("params[0].id", "24");
        request.param("params[0].name", "title");
        request.param("params[0].label", "Гарчиг");
        request.param("params[0].type", "TEXT");
        request.param("params[0].order", "0");

        request.param("params[1].id", "0");
        request.param("params[1].name", "delete");
        request.param("params[1].label", "delete");
        request.param("params[1].type", "TEXT");
        request.param("params[1].order", "0");
        request.param("params[1].query", "");

        request.file(multipartFile);

        mockMvc.perform(request)
                .andExpect(status().isOk());
    }

    @Test
    @Transactional
    public void testDelete() throws Exception {
        String path = PATH + "report.json";
        MockHttpServletRequestBuilder request = delete(path).param("id", "12");
        mockMvc.perform(request)
                .andExpect(status().isOk());
    }

}
