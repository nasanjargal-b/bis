package com.monsource.bis.report.controller;

import com.monsource.bis.core.security.AuthSupport;
import com.monsource.bis.data.entity.ReportEntity;
import com.monsource.bis.data.entity.ReportParamEntity;
import com.monsource.bis.data.entity.ReportQueryEntity;
import com.monsource.bis.report.dao.ReportDao;
import com.monsource.bis.report.dao.ReportQueryDao;
import com.monsource.bis.report.service.ReportFileService;
import com.monsource.bis.report.service.ReportGeneratorService;
import org.hibernate.SessionFactory;
import org.hibernate.internal.SessionImpl;
import org.pentaho.reporting.engine.classic.core.Element;
import org.pentaho.reporting.engine.classic.core.MasterReport;
import org.pentaho.reporting.engine.classic.core.ReportProcessingException;
import org.pentaho.reporting.engine.classic.core.modules.misc.datafactory.sql.SQLReportDataFactory;
import org.pentaho.reporting.engine.classic.core.parameters.DefaultParameterDefinition;
import org.pentaho.reporting.engine.classic.core.parameters.PlainParameter;
import org.pentaho.reporting.libraries.resourceloader.ResourceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.Time;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by nasanjargal on 6/18/14.
 */
@Controller
@RequestMapping("/report-mod/report/view")
public class ShowReportCtrl {

    @Autowired
    ReportDao reportDao;
    @Autowired
    ReportQueryDao reportQueryDao;
    @Autowired
    ReportGeneratorService reportGeneratorSrv;
    @Autowired
    ReportFileService reportFileSrv;
    @Autowired
    AuthSupport authSupport;
    @Autowired
    SessionFactory sessionFactory;

    @RequestMapping("show/{id}.html")
    public void show(@PathVariable Integer id, @RequestParam ReportType type, @RequestParam Integer queryId, HttpServletRequest request, HttpServletResponse response) throws IOException, ResourceException, ReportProcessingException, ParseException {

        ReportEntity report = reportDao.get(id);
        ReportQueryEntity reportQuery = reportQueryDao.get(queryId);
        String username = authSupport.getAuthDetails().getUsername();
        String queryName = "query" + new Date().getTime();


        MasterReport masterReport = reportFileSrv.getMasterReport(report.getFile());

        SQLReportDataFactory sqlDataFactory = new SQLReportDataFactory(((SessionImpl) sessionFactory.getCurrentSession()).connection());
        sqlDataFactory.setQuery(queryName, reportQuery.getQuery());
        masterReport.setDataFactory(sqlDataFactory);
        masterReport.setQuery(queryName);

        List<ReportParamEntity> params = new ArrayList<>();

        params.addAll(report.getReportParams());
        params.addAll(reportQuery.getReportParams());

        setParamDefinition(masterReport, params);
        setParamValues(masterReport, params, request);


        reportGeneratorSrv.generate(username, report.getName(), type, response, masterReport);
    }

    private void setParamDefinition(MasterReport masterReport, List<ReportParamEntity> params) {
        DefaultParameterDefinition parameterDef = new DefaultParameterDefinition();
        for (ReportParamEntity param : params) {
            Class c = null;
            switch (param.getType()) {
                case INTEGER:
                    c = Integer.class;
                    break;
                case DECIMAL:
                    c = Double.class;
                    break;
                case BOOLEAN:
                    c = Boolean.class;
                    break;
                case TEXT:
                    c = String.class;
                    break;
                case DATE:
                    c = Date.class;
                    break;
                case TIME:
                    c = Time.class;
                    break;
                case SINGLE_CHOICE:
                    c = String.class;
                    break;
                case MULTIPLE_CHOICE:
                    c = String.class;
                    break;
                case CITY:
                    c = Integer.class;
                    break;
                case DISTRICT:
                    c = Integer.class;
                    break;
            }
            parameterDef.addParameterDefinition(new PlainParameter(param.getName(), c));
        }

        masterReport.setParameterDefinition(parameterDef);
    }

    private void setParamValues(MasterReport masterReport, List<ReportParamEntity> params, HttpServletRequest request) throws ParseException {

        DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
        DateFormat tf = new SimpleDateFormat("hh:mm:ss");

        for (ReportParamEntity param : params) {
            Object value = null;
            switch (param.getType()) {
                case INTEGER:
                    value = Integer.valueOf(request.getParameter(param.getName()));
                    break;
                case DECIMAL:
                    value = Double.valueOf(request.getParameter(param.getName()));
                    break;
                case BOOLEAN:
                    value = Boolean.valueOf(request.getParameter(param.getName()));
                    break;
                case TEXT:
                case SINGLE_CHOICE:
                    value = request.getParameter(param.getName());
                    break;
                case DATE:
                    value = df.parse(request.getParameter(param.getName()));
                    break;
                case TIME:
                    value = new Time(tf.parse(request.getParameter(param.getName())).getTime());
                    break;
                case MULTIPLE_CHOICE:
                    value = request.getParameterValues(param.getName());
                    break;
                case CITY:
                    value = Integer.valueOf(request.getParameter(param.getName()));
                    break;
                case DISTRICT:
                    value = Integer.valueOf(request.getParameter(param.getName()));
                    break;
            }
            System.out.println(param.getName() + " : " + value);
            masterReport.getParameterValues().put(param.getName(), value);
        }
    }
}
