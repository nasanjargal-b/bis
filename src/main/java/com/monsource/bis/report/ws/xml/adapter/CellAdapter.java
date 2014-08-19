package com.monsource.bis.report.ws.xml.adapter;

import com.monsource.bis.report.ws.xml.ReportResultCellXml;

import javax.xml.bind.annotation.adapters.XmlAdapter;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Created by nasanjargal on 8/19/14.
 */
public class CellAdapter extends XmlAdapter<ReportResultCellXml[], Map<String, Object>> {
    @Override
    public Map<String, Object> unmarshal(ReportResultCellXml[] v) throws Exception {
        return null;
    }

    @Override
    public ReportResultCellXml[] marshal(Map<String, Object> v) throws Exception {

        List<ReportResultCellXml> cells = new ArrayList<>();

        for (String key : v.keySet()) {
            cells.add(new ReportResultCellXml(key, v.get(key) + ""));
        }

        return cells.toArray(new ReportResultCellXml[cells.size()]);
    }
}
