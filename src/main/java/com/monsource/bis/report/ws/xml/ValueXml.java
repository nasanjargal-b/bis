package com.monsource.bis.report.ws.xml;

import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlValue;

/**
 * Created by nasanjargal on 8/14/14.
 */
public class ValueXml {
    Integer code;
    String description;

    public ValueXml() {
    }

    public ValueXml(Integer code, String description) {
        this.code = code;
        this.description = description;
    }

    @XmlAttribute
    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public String getDescription() {
        return description;
    }

    @XmlValue
    public void setDescription(String description) {
        this.description = description;
    }
}
