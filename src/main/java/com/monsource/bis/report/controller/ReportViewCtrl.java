package com.monsource.bis.report.controller;

import com.monsource.bis.core.json.JsonData;
import com.monsource.bis.report.model.Report;
import com.monsource.bis.report.service.ReportService;
import com.monsource.bis.report.service.ReportViewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

/**
 * Created by nasanjargal on 7/8/14.
 */
@Controller
@RequestMapping("/report-mod/view")
public class ReportViewCtrl {

    @Autowired
    ReportViewService reportViewSrv;
    @Autowired
    ReportService reportSrv;

    @RequestMapping("data.json")
    @ResponseBody
    public JsonData getData(Integer id, HttpServletRequest request) {
        Map<String, String[]> requestParameter = request.getParameterMap();
        return new JsonData(reportViewSrv.calc(id, requestParameter));
    }

    @RequestMapping("preview/data.json")
    @ResponseBody
    public JsonData getPreviewData(@RequestBody Report report) {
        return new JsonData(reportViewSrv.calc(report, null));
    }

    @RequestMapping("metadata.json")
    @ResponseBody
    public JsonData getMetadata(Integer id) {
        Report report = reportSrv.get(id);
        report.setFilters(null);
        return new JsonData(report);
    }

}
