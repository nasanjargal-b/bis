package com.monsource.bis.report.ws.xml;

import javax.xml.bind.annotation.XmlElement;

/**
 * Created by nasanjargal on 8/19/14.
 */
public class ReportResultCellXml {
    String code;
    String value;

    public ReportResultCellXml() {
    }

    public ReportResultCellXml(String code, String value) {
        this.code = code;
        this.value = value;
    }

    public String getCode() {
        return code;
    }

    @XmlElement
    public void setCode(String code) {
        this.code = code;
    }

    public String getValue() {
        return value;
    }

    @XmlElement
    public void setValue(String value) {
        this.value = value;
    }
}
