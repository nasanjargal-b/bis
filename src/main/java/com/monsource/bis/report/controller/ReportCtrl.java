package com.monsource.bis.report.controller;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.monsource.bis.core.json.JsonData;
import com.monsource.bis.report.model.*;
import com.monsource.bis.report.dao.*;
import com.monsource.bis.report.service.*;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.ServletContext;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Date;
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
    @Autowired
    ObjectMapper objectMapper;
    @Autowired
    ServletContext context;

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
     * @param reportJson
     * @param file
     */
    @RequestMapping(value = "reportJasper.json", method = RequestMethod.POST)
    @ResponseBody
    @Transactional
    public JsonData saveWithFile(@RequestParam("report") String reportJson, MultipartFile file) throws IOException {

        Report report = objectMapper.readValue(reportJson, Report.class);
        String name = null;
        if (!file.isEmpty()) {
            name = new Date().getTime() + ".jasper";
            FileOutputStream fos = new FileOutputStream(context.getRealPath("/WEB-INF/report/" + name));
            IOUtils.copy(file.getInputStream(), fos);
            fos.close();

            report.setFile(name);
        } else {
            report.setFile(null);
        }

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