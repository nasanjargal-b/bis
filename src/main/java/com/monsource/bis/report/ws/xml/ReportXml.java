package com.monsource.bis.report.ws.xml;

import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlElementWrapper;
import javax.xml.bind.annotation.XmlRootElement;
import java.io.Serializable;
import java.util.List;

/**
 * Created by nasanjargal on 8/13/14.
 */
public class ReportXml implements Serializable {
    Integer id;
    String name;
    List<ParameterXml> parameters;

    public ReportXml() {
    }

    public ReportXml(Integer id, String name) {
        this.id = id;
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    @XmlAttribute
    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    @XmlElement
    public void setName(String name) {
        this.name = name;
    }

    @XmlElementWrapper(name = "parameters")
    @XmlElement(name = "parameter")
    public List<ParameterXml> getParameters() {
        return parameters;
    }

    public void setParameters(List<ParameterXml> parameters) {
        this.parameters = parameters;
    }
}
