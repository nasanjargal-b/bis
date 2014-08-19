package com.monsource.bis.report.ws.xml;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.List;

/**
 * Created by nasanjargal on 8/14/14.
 */
@XmlRootElement(name = "reports")
public class ReportsXml {
    List<ReportXml> reports;

    public ReportsXml() {
    }

    public ReportsXml(List<ReportXml> reports) {
        this.reports = reports;
    }

    //    @XmlElementWrapper(name = "reports")
    @XmlElement(name = "report")
    public List<ReportXml> getReports() {
        return reports;
    }

    public void setReports(List<ReportXml> reports) {
        this.reports = reports;
    }
}
