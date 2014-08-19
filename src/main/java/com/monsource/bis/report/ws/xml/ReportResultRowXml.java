package com.monsource.bis.report.ws.xml;

import com.monsource.bis.report.ws.xml.adapter.CellAdapter;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.adapters.XmlJavaTypeAdapter;
import java.util.Map;

/**
 * Created by nasanjargal on 8/19/14.
 */
public class ReportResultRowXml {
    private Map data;

    public ReportResultRowXml() {
    }

    public ReportResultRowXml(Map data) {
        this.data = data;
    }

    public Map getData() {
        return data;
    }

    @XmlJavaTypeAdapter(CellAdapter.class)
    @XmlElement(name = "cell")
    public void setData(Map data) {
        this.data = data;
    }
}
