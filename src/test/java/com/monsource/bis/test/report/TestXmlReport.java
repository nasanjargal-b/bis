package com.monsource.bis.test.report;

import com.monsource.bis.report.ws.xml.InputParamXml;
import com.monsource.bis.report.ws.xml.InputParamsXml;
import org.junit.Test;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Marshaller;
import javax.xml.bind.Unmarshaller;
import java.io.StringReader;
import java.util.ArrayList;

/**
 * Created by nasanjargal on 8/19/14.
 */
public class TestXmlReport {

    private static final String DATA = "" +
            "\n\n\n<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\n" +
            "<parameters>\n" +
            "    <parameter id=\"D_ID\">345</parameter>\n" +
            "    <parameter id=\"C_ID\">20</parameter>\n" +
            "</parameters>";


    @Test
    public void testUnmarshalling() throws JAXBException {
        JAXBContext jaxbContext = JAXBContext.newInstance(InputParamsXml.class);
        Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();

        InputParamsXml params = (InputParamsXml) unmarshaller.unmarshal(new StringReader(DATA));

        for (InputParamXml param : params) {
            System.out.println(param.getId() + " = " + param.getValue());
        }
    }

}
