package com.monsource.bis.report.ws.xml;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlElementWrapper;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.Iterator;
import java.util.List;

/**
 * Created by nasanjargal on 8/19/14.
 */
@XmlRootElement(name = "parameters")
public class InputParamsXml implements Iterable<InputParamXml> {

    private List<InputParamXml> params;

    public List<InputParamXml> getParams() {
        return params;
    }

    @XmlElement(name = "parameter")
    public void setParams(List<InputParamXml> params) {
        this.params = params;
    }

    @Override
    public Iterator<InputParamXml> iterator() {
        return params.iterator();
    }
}
