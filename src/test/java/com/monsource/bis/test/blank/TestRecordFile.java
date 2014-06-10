package com.monsource.bis.test.blank;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.mock.web.MockMultipartHttpServletRequest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMultipartHttpServletRequestBuilder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.WebApplicationContext;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.util.HashMap;

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
public class TestRecordFile {

    static final String PATH = "/blank-mod/record/file/";

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
    public void testDownload() throws Exception {

        String path = PATH + "download.xlsx";

        MockHttpServletRequestBuilder request = get(path);
        request.param("blankId", "B01");

        MvcResult result = mockMvc.perform(request)
                .andExpect(status().isOk())
                .andReturn();

        byte[] content = result.getResponse().getContentAsByteArray();

        FileOutputStream fos = new FileOutputStream("/home/nasanjargal/Desktop/B01.xlsx");
        fos.write(content);
        fos.flush();
        fos.close();

    }

    @Test
    @Transactional
    public void testSave() throws Exception {

        String path = PATH + "upload.json";

        FileInputStream fis = new FileInputStream("/home/nasanjargal/Desktop/B01.xlsx");
        MockMultipartFile multipartFile = new MockMultipartFile("file", fis);

        MockMultipartHttpServletRequestBuilder request = fileUpload(path);
        request.param("blankId", "B01");
        request.param("researchId", "1");
        request.file(multipartFile);

        mockMvc.perform(request)
                .andExpect(status().isOk());
    }

}
