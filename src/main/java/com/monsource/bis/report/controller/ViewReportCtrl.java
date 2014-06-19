package com.monsource.bis.report.controller;

import com.monsource.bis.core.security.AuthSupport;
import com.monsource.bis.data.entity.ReportEntity;
import com.monsource.bis.report.dao.ReportCityDao;
import com.monsource.bis.report.dao.ReportDao;
import com.monsource.bis.report.dao.ReportQueryDao;
import com.monsource.bis.report.service.ReportFileService;
import com.monsource.bis.report.service.ReportGeneratorService;
import com.monsource.bis.report.service.ReportViewService;
import org.hibernate.SessionFactory;
import org.hibernate.internal.SessionImpl;
import org.pentaho.reporting.engine.classic.core.MasterReport;
import org.pentaho.reporting.engine.classic.core.ReportProcessingException;
import org.pentaho.reporting.engine.classic.core.modules.misc.datafactory.sql.SQLReportDataFactory;
import org.pentaho.reporting.libraries.resourceloader.ResourceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.MalformedURLException;
import java.util.Date;

import com.monsource.bis.core.json.*;

/**
 * Created by nasanjargal on 6/15/14.
 */
@Controller
@RequestMapping("/report-mod/report/view")
public class ViewReportCtrl {

    @Autowired
    ReportDao reportDao;
    @Autowired
    ReportQueryDao reportQueryDao;
    @Autowired
    ReportViewService reportViewSrv;
    @Autowired
    ReportCityDao reportCityDao;

    @RequestMapping(value = "cities.json", method = RequestMethod.GET)
    @ResponseBody
    public JsonData getCities() {
        return new JsonData(reportCityDao.findAll());
    }

    /**
     * @param id
     */
    @RequestMapping("queries.json")
    @ResponseBody
    public JsonData getQueries(Integer id) {
        return new JsonData(reportQueryDao.find(id));
    }

    /**
     * @param reportId
     */
    @RequestMapping(value = "params.json", params = "reportId")
    @ResponseBody
    public JsonData getReportParams(Integer reportId) {
        return new JsonData(reportViewSrv.getReportParam(reportId));
    }

    /**
     * @param queryId ReportQueryEntity.id
     */
    @RequestMapping(value = "params.json", params = "queryId")
    @ResponseBody
    public JsonData getQueryParams(Integer queryId) {
        return new JsonData(reportViewSrv.getQueryParam(queryId));
    }

}
