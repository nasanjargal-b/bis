package com.monsource.bis.test.blank;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.transaction.TransactionConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.WebApplicationContext;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.*;

/**
 * Created by nasanjargal on 6/2/14.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration({"classpath:context-mod.xml", "classpath:context-db.xml", "classpath:context-web.xml"})
//@TransactionConfiguration(defaultRollback = false)
public class TestBlank {

    static final String PATH = "/blank-mod/blank/";

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

        String path = PATH + "blank.json";

        MvcResult result = mockMvc.perform(get(path).param("id", "B01"))
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

        String path = PATH + "blank.json";

        String json = getJSON();

        MvcResult result = mockMvc.perform(post(path).contentType(MediaType.APPLICATION_JSON).content(json))
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

        String path = PATH + "blank.json";

        String json = "[\"B01\"]";

        MvcResult result = mockMvc.perform(delete(path).contentType(MediaType.APPLICATION_JSON).content(json))
                .andExpect(status().isOk())
                .andReturn();

        String content = result.getResponse().getContentAsString();

        System.out.println("=================CONTENT===========================");
        System.out.println(content);
        System.out.println("=================CONTENT===========================");

    }

    public String getJSON() {
        return "{\n" +
                "    \"id\": \"B01\",\n" +
                "    \"name\": \"\\u041c\\u0430\\u044f\\u0433\\u0442 1\",\n" +
                "    \"blankGroupId\": \"BG01\",\n" +
                "    \"questions\": [\n" +
                "        {\n" +
                "            \"id\": \"Q1\",\n" +
                "            \"text\": \"\\u0410\\u0441\\u0443\\u0443\\u043b\\u0442 1\",\n" +
                "            \"name\": \"Q1\",\n" +
                "            \"group\": false,\n" +
                "            \"grid\": true,\n" +
                "            \"type\": \"TEXT\",\n" +
                "            \"choices\": null\n" +
                "        },\n" +
                "        {\n" +
                "            \"id\": \"QG1\",\n" +
                "            \"text\": \"\\u0422\\u043e\\u043e\\u043d \\u0443\\u0442\\u0433\\u0443\\u0443\\u0434\",\n" +
                "            \"name\": \"\",\n" +
                "            \"group\": true,\n" +
                "            \"grid\": false,\n" +
                "            \"type\": null,\n" +
                "            \"choices\": null,\n" +
                "            \"children\": [\n" +
                "                {\n" +
                "                    \"id\": \"Q2\",\n" +
                "                    \"text\": \"\\u0410\\u0441\\u0443\\u0443\\u043b\\u0442 2\",\n" +
                "                    \"name\": \"\",\n" +
                "                    \"group\": false,\n" +
                "                    \"grid\": true,\n" +
                "                    \"type\": \"DECIMAL\",\n" +
                "                    \"choices\": null\n" +
                "                },\n" +
                "                {\n" +
                "                    \"id\": \"Q3\",\n" +
                "                    \"text\": \"\\u0410\\u0441\\u0443\\u0443\\u043b\\u0442 3\",\n" +
                "                    \"name\": \"Q3\",\n" +
                "                    \"group\": false,\n" +
                "                    \"grid\": true,\n" +
                "                    \"type\": \"INTEGER\",\n" +
                "                    \"choices\": null\n" +
                "                },\n" +
                "                {\n" +
                "                    \"id\": \"QG3\",\n" +
                "                    \"text\": \"\\u0417\\u04e9\\u0432\\u0445\\u04e9\\u043d \\u0442\\u0435\\u0441\\u0442 \\u0445\\u0438\\u0439\\u0445 \\u0437\\u043e\\u0440\\u0438\\u043b\\u0433\\u043e\\u0442\\u043e\\u0439 \\u043c\\u044d\\u0434\\u044d\\u044d\\u043b\\u043b\\u044d\\u043b\",\n" +
                "                    \"name\": \"\",\n" +
                "                    \"group\": true,\n" +
                "                    \"grid\": false,\n" +
                "                    \"type\": null,\n" +
                "                    \"choices\": null,\n" +
                "                    \"children\": [\n" +
                "                        {\n" +
                "                            \"id\": \"Q9\",\n" +
                "                            \"text\": \"\\u0410\\u0441\\u0443\\u0443\\u043b\\u0442 8\",\n" +
                "                            \"name\": \"\",\n" +
                "                            \"group\": false,\n" +
                "                            \"grid\": true,\n" +
                "                            \"type\": \"TEXT\",\n" +
                "                            \"choices\": null\n" +
                "                        }\n" +
                "                    ]\n" +
                "                }\n" +
                "            ]\n" +
                "        },\n" +
                "        {\n" +
                "            \"id\": \"QG2\",\n" +
                "            \"text\": \"\\u0416\\u0430\\u0433\\u0441\\u0430\\u0430\\u043b\\u0442\\u0430\\u043d \\u0443\\u0442\\u0433\\u0443\\u0443\\u0434\",\n" +
                "            \"name\": \"\",\n" +
                "            \"group\": true,\n" +
                "            \"grid\": false,\n" +
                "            \"type\": null,\n" +
                "            \"choices\": null,\n" +
                "            \"children\": [\n" +
                "                {\n" +
                "                    \"id\": \"Q4\",\n" +
                "                    \"text\": \"\\u041d\\u044d\\u0433 \\u0441\\u043e\\u043d\\u0433\\u043e\\u043b\\u0442\",\n" +
                "                    \"name\": \"\",\n" +
                "                    \"group\": false,\n" +
                "                    \"grid\": true,\n" +
                "                    \"type\": \"SINGLE_CHOICE\",\n" +
                "                    \"choices\": [\"\\u0421\\u043e\\u043d\\u0433\\u043e\\u043b\\u0442 1\", \"\\u0421\\u043e\\u043d\\u0433\\u043e\\u043b\\u0442 2\", \"\\u0421\\u043e\\u043d\\u0433\\u043e\\u043b\\u0442 3\", \"\\u0421\\u043e\\u043d\\u0433\\u043e\\u043b\\u0442 4\"]\n" +
                "                },\n" +
                "                {\n" +
                "                    \"id\": \"Q10\",\n" +
                "                    \"text\": \"\\u041e\\u043b\\u043e\\u043d \\u0441\\u043e\\u043d\\u0433\\u043e\\u043b\\u0442\",\n" +
                "                    \"name\": \"Q5\",\n" +
                "                    \"group\": false,\n" +
                "                    \"grid\": true,\n" +
                "                    \"type\": \"MULTIPLE_CHOICE\",\n" +
                "                    \"choices\": [\"\\u0421\\u043e\\u043d\\u0433\\u043e\\u043b\\u0442 1\", \"\\u0421\\u043e\\u043d\\u0433\\u043e\\u043b\\u0442 2\", \"\\u0421\\u043e\\u043d\\u0433\\u043e\\u043b\\u0442 3\", \"\\u0421\\u043e\\u043d\\u0433\\u043e\\u043b\\u0442 4\"]\n" +
                "                }\n" +
                "            ]\n" +
                "        },\n" +
                "        {\n" +
                "            \"id\": \"Q6\",\n" +
                "            \"text\": \"\\u0410\\u0441\\u0443\\u0443\\u043b\\u0442 6. \\u0422\\u0438\\u0439\\u043c \\u04af\\u0433\\u04af\\u0439.\",\n" +
                "            \"name\": \"Q6\",\n" +
                "            \"group\": false,\n" +
                "            \"grid\": true,\n" +
                "            \"type\": \"BOOLEAN\",\n" +
                "            \"choices\": null\n" +
                "        },\n" +
                "        {\n" +
                "            \"id\": \"Q7\",\n" +
                "            \"text\": \"\\u0410\\u0441\\u0443\\u0443\\u043b\\u0442 Date?\",\n" +
                "            \"name\": \"\",\n" +
                "            \"group\": false,\n" +
                "            \"grid\": true,\n" +
                "            \"type\": \"DATE\",\n" +
                "            \"choices\": null\n" +
                "        }\n" +
                "    ]\n" +
                "}";
    }

}
