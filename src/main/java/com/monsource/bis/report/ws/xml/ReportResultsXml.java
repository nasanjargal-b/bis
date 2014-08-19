package com.monsource.bis.report.ws.xml;

import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlElementWrapper;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.List;

@XmlRootElement(name = "report")
public class ReportResultsXml {

    private Integer id;
    private String name;
    private List<ReportResultColumnXml> columns;
    private List<ReportResultRowXml> rows;

    public ReportResultsXml() {
    }

    public ReportResultsXml(Integer id, String name) {
        this.id = id;
        this.name = name;
    }

    public List<ReportResultColumnXml> getColumns() {
        return columns;
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

    @XmlAttribute
    public void setName(String name) {
        this.name = name;
    }

    @XmlElementWrapper(name = "meta")
    @XmlElement(name = "column")
    public void setColumns(List<ReportResultColumnXml> columns) {
        this.columns = columns;
    }

    @XmlElementWrapper(name = "data")
    @XmlElement(name = "row")
    public List<ReportResultRowXml> getRows() {
        return rows;
    }

    public void setRows(List<ReportResultRowXml> rows) {
        this.rows = rows;
    }
}