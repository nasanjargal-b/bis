package com.monsource.bis.report.controller;

import com.monsource.bis.core.json.JsonData;
import com.monsource.bis.report.model.*;
import com.monsource.bis.report.dao.*;
import com.monsource.bis.report.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/report-mod/report")
public class ReportCtrl {

    @Autowired
    ReportDao reportDao;
    @Autowired
    ReportService reportSrv;
    @Autowired
    ReportQueryService reportQuerySrv;

    /**
     * @param node
     */
    @RequestMapping("reports.json")
    @ResponseBody
    public JsonData list(Integer node) {
        node = node != null && node == 0 ? null : node;
        return new JsonData(reportDao.find(node));
    }

    /**
     * @param reports
     */
    @RequestMapping(value = "reports.json", method = RequestMethod.POST)
    @ResponseBody
    @Transactional
    public JsonData saveOrder(@RequestBody List<Report> reports) {
        reportSrv.saveOrder(reports, 0, null);
        return new JsonData(true);
    }

    /**
     * @param id
     */
    @RequestMapping(value = "report.json", method = RequestMethod.GET)
    @ResponseBody
    public JsonData get(Integer id) {
        return new JsonData(reportSrv.get(id));
    }

    /**
     * @param report
     */
    @RequestMapping(value = "report.json", method = RequestMethod.POST)
    @ResponseBody
    @Transactional
    public JsonData save(@RequestBody Report report) {
        Integer id = reportSrv.save(report);
        return new JsonData(id);
    }

    /**
     * @param reports
     */
    @RequestMapping(value = "report.json", method = RequestMethod.DELETE)
    @ResponseBody
    @Transactional
    public JsonData delete(@RequestBody List<Report> reports) {
        reportSrv.delete(reports);
        return new JsonData(true);
    }

    @RequestMapping(value = "report-query.json", method = RequestMethod.POST)
    @ResponseBody
    public JsonData query(String query) {
        return new JsonData(reportQuerySrv.queryMetaData(query));
    }

}