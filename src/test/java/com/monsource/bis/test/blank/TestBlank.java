package com.monsource.bis.test.blank;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.monsource.bis.blank.dao.BlankDao;
import com.monsource.bis.blank.dao.TableViewDao;
import com.monsource.bis.data.entity.ColumnViewEntity;
import com.monsource.bis.data.entity.TableViewEntity;
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

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

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
    BlankDao blankDao;
    @Autowired
    TableViewDao tableViewDao;
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
    public void testTable() {
        TableViewEntity table = tableViewDao.get("b10");
        System.out.println(table);
        System.out.println(table.getTableName());
        for (ColumnViewEntity columnView : table.getColumns()) {
            System.out.println(columnView.getColumnName());
            System.out.println("\t"+columnView.getDataType());
        }
    }

    /*@Test
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

    }*/

    public String getJSON() throws IOException {
        byte[] b = Files.readAllBytes(new File("/media/d/My Project/bis/WebBis/src/test/test.json").toPath());
        return new String(b, "UTF-8");
    }

}
