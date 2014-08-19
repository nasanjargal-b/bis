package com.monsource.bis.report.ws.xml;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlElementWrapper;
import java.util.List;

/**
 * Created by nasanjargal on 8/14/14.
 */
public class ParameterXml {

    String code;
    String name;
    List<ValueXml> values;

    public ParameterXml() {
    }

    public ParameterXml(String code, String name, List<ValueXml> values) {
        this.code = code;
        this.name = name;
        this.values = values;
    }

    public String getCode() {
        return code;
    }

    @XmlElement
    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    @XmlElement
    public void setName(String name) {
        this.name = name;
    }

    @XmlElementWrapper(name = "values")
    @XmlElement(name = "value")
    public List<ValueXml> getValues() {
        return values;
    }

    public void setValues(List<ValueXml> values) {
        this.values = values;
    }
}
