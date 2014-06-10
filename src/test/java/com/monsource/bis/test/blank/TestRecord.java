package com.monsource.bis.test.blank;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.WebApplicationContext;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.webAppContextSetup;

/**
 * Created by nasanjargal on 6/2/14.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration({"classpath:context-mod.xml", "classpath:context-db.xml", "classpath:context-web.xml"})
//@TransactionConfiguration(defaultRollback = false)
public class TestRecord {

    static final String PATH = "/blank-mod/record/";

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
    public void testGet() throws Exception {

        String path = PATH + "records.json";

        MockHttpServletRequestBuilder request = get(path);
        request.param("blankId", "B01");
        request.param("researchId", "1");
        request.param("start", "0");
        request.param("limit", "25");

        MvcResult result = mockMvc.perform(request)
                .andExpect(status().isOk())
                .andReturn();

        String content = result.getResponse().getContentAsString();

        System.out.println("=================CONTENT===========================");
        System.out.println(content);
        System.out.println("=================CONTENT===========================");

    }

    @Test
    @Transactional
    public void testSave() throws Exception {

        String json = "{\n" +
                "    \"id\" : 2,\n" +
                "    \"accountId\" : 1,\n" +
                "    \"researchId\" : null,\n" +
                "    \"cityId\" : 1,\n" +
                "    \"district\" : 2,\n" +
                "    \"description\" : \"Desc too\",\n" +
                "    \"createDate\" : null,\n" +
                "    \"fillWorker\" : null,\n" +
                "    \"fillPosition\" : null,\n" +
                "    \"fillPhone\" : null,\n" +
                "    \"fillDate\" : \"2014-04-08\",\n" +
                "    \"researcher\" : null,\n" +
                "    \"data\" : {\n" +
                "      \"q1\" : \"test 2\",\n" +
                "      \"q2\" : 46,\n" +
                "      \"q3\" : \"C1\",\n" +
                "      \"q4\" : [ \"M2\", \"M3\", \"M7\" ],\n" +
                "      \"q5\" : \"2014-05-29\"\n" +
                "    }\n" +
                "  }";

        String path = PATH + "record.json";

        MockHttpServletRequestBuilder request = post(path);
        request.param("blankId", "B02");
        request.param("researchId", "2");

        request.content(json);

        MvcResult result = mockMvc.perform(request)
                .andExpect(status().isOk())
                .andReturn();

        String content = result.getResponse().getContentAsString();

        System.out.println("=================CONTENT===========================");
        System.out.println(content);
        System.out.println("=================CONTENT===========================");
    }

    @Test
    @Transactional
    public void testDelete() throws Exception {

        String path = PATH + "record.json";

        MockHttpServletRequestBuilder request = delete(path);
        request.param("blankId", "B02");

        request.content("[1,2]");

        MvcResult result = mockMvc.perform(request)
                .andExpect(status().isOk())
                .andReturn();

        String content = result.getResponse().getContentAsString();

        System.out.println("=================CONTENT===========================");
        System.out.println(content);
        System.out.println("=================CONTENT===========================");

    }

}
