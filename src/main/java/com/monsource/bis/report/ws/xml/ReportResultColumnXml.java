package com.monsource.bis.report.ws.xml;

import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlValue;

/**
 * Created by nasanjargal on 8/19/14.
 */
public class ReportResultColumnXml {
    String code;
    String name;

    public ReportResultColumnXml() {
    }

    public ReportResultColumnXml(String code, String name) {
        this.code = code;
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    @XmlAttribute(name = "code")
    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    @XmlValue()
    public void setName(String name) {
        this.name = name;
    }
}
