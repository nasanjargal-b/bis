package com.monsource.bis.report.controller;

import com.monsource.bis.core.json.JsonData;
import com.monsource.bis.report.dao.ReportDao;
import com.monsource.bis.report.service.ReportService;
import com.monsource.bis.report.service.ReportGroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.support.TransactionCallback;
import org.springframework.transaction.support.TransactionTemplate;
import org.springframework.web.bind.annotation.*;
import com.monsource.bis.report.model.*;

import java.util.List;

/**
 * Created by nasanjargal on 6/15/14.
 */
@Controller
@RequestMapping("/report-mod/report")
public class ReportCtrl {

    @Autowired
    ReportService reportSrv;
    @Autowired
    ReportDao reportDao;
    @Autowired
    TransactionTemplate template;


    /**
     * @param groupId
     */
    @RequestMapping("reports.json")
    @ResponseBody
    public JsonData reports(Integer groupId) {
        return new JsonData(reportDao.findByGroupId(groupId));
    }

    @RequestMapping(value = "reports.json", method = RequestMethod.POST)
    @ResponseBody
    @Transactional
    public JsonData groupChange(@RequestBody List<Reports> reports) {
        reportSrv.groupChange(reports);
        return new JsonData(true);
    }

    /**
     * @param id
     */
    @RequestMapping(value = "report.json", method = RequestMethod.GET)
    @ResponseBody
    public JsonData get(@RequestParam Integer id) {
        return new JsonData(reportSrv.get(id));
    }

    /**
     * @param report
     */
    @RequestMapping(value = "report.json", method = RequestMethod.POST)
    @ResponseBody
    public JsonData save(@ModelAttribute() final Report report) {
        report.setOrder(report.getOrder() == null ? 0 : report.getOrder());
        if (report.getParams() != null)
            for (Param param : report.getParams()) {
                param.setId(param.getId() != null && param.getId() == 0 ? null : param.getId());
            }

        if (report.getQueries() != null)
            for (Query query : report.getQueries()) {
                query.setId(query.getId() != null && query.getId() == 0 ? null : query.getId());
                if (query.getParams() != null)
                    for (Param param : query.getParams()) {
                        param.setId(param.getId() != null && param.getId() == 0 ? null : param.getId());
                    }
            }
        return template.execute(new TransactionCallback<JsonData>() {
            @Override
            public JsonData doInTransaction(TransactionStatus status) {
                reportSrv.save(report);
                return new JsonData(true);
            }
        });
    }

    /**
     * @param id
     */
    @RequestMapping(value = "report/{id}.json", method = RequestMethod.DELETE)
    @ResponseBody
    @Transactional
    public JsonData delete(@PathVariable("id") Integer id) {
        reportSrv.delete(id);
        return new JsonData(true);
    }


}
