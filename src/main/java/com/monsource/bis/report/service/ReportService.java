package com.monsource.bis.report.service;

import com.monsource.bis.data.entity.ReportEntity;
import com.monsource.bis.data.entity.ReportGroupEntity;
import com.monsource.bis.data.entity.ReportParamEntity;
import com.monsource.bis.data.entity.ReportQueryEntity;
import com.monsource.bis.report.dao.ReportDao;
import com.monsource.bis.report.exception.ReportFileEmptyException;
import com.monsource.bis.report.exception.ReportQueryIsEmptyException;
import com.monsource.bis.report.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;

@Service
public class ReportService {

    @Autowired
    ReportDao reportDao;
    @Autowired
    ReportFileService reportFileSrv;

    /**
     * @param id
     */
    public Report get(Integer id) {

        ReportEntity entity = reportDao.get(id);
        Report report = new Report();

        report.setId(entity.getId());
        report.setName(entity.getName());
        report.setOrder(entity.getOrder());
        report.setReportGroupId(entity.getReportGroup().getId());
        report.setReportGroupName(entity.getReportGroup().getName());

        report.setParams(new ArrayList<Param>());
        report.setQueries(new ArrayList<Query>());

        for (ReportParamEntity paramEntity : entity.getReportParams()) {
            Param param = new Param(paramEntity.getId(), paramEntity.getName(), paramEntity.getLabel(), paramEntity.getType(), paramEntity.getQuery(), paramEntity.getOrder());
            report.getParams().add(param);
        }

        for (ReportQueryEntity queryEntity : entity.getReportQueries()) {
            Query query = new Query(queryEntity.getId(), queryEntity.getName(), queryEntity.getQuery());
            query.setParams(new ArrayList<Param>());
            for (ReportParamEntity paramEntity : queryEntity.getReportParams()) {
                Param param = new Param(paramEntity.getId(), paramEntity.getName(), paramEntity.getLabel(), paramEntity.getType(), paramEntity.getQuery(), paramEntity.getOrder());
                query.getParams().add(param);
            }
            report.getQueries().add(query);
        }

        return report;
    }

    /**
     * @param report
     */
    public void save(Report report) {
        ReportEntity entity = null;

        if (report.getQueries() == null || report.getQueries().size() == 0)
            throw new ReportQueryIsEmptyException();

        if (report.getId() != null && report.getId() != 0) {
            entity = reportDao.get(report.getId());
            entity.getReportParams().clear();
            entity.getReportQueries().clear();
        } else {
            entity = new ReportEntity();
            entity.setReportParams(new HashSet<ReportParamEntity>());
            entity.setReportQueries(new HashSet<ReportQueryEntity>());
        }

        entity.setName(report.getName());
        entity.setOrder(report.getOrder());
        entity.setReportGroup(new ReportGroupEntity(report.getReportGroupId()));

        if (report.getParams() != null)
            for (Param param : report.getParams()) {
                ReportParamEntity paramEntity = new ReportParamEntity(param.getId(), param.getName(), param.getLabel(), param.getType(), param.getOrder(), param.getQuery(), entity);
                entity.getReportParams().add(paramEntity);
            }

        for (Query query : report.getQueries()) {
            ReportQueryEntity queryEntity = new ReportQueryEntity(query.getId(), query.getName(), query.getQuery(), entity);
            queryEntity.setReportParams(new HashSet<ReportParamEntity>());
            entity.getReportQueries().add(queryEntity);
            if (query.getParams() != null)
                for (Param param : query.getParams()) {
                    ReportParamEntity paramEntity = new ReportParamEntity(param.getId(), param.getName(), param.getLabel(), param.getType(), param.getOrder(), param.getQuery(), queryEntity);
                    queryEntity.getReportParams().add(paramEntity);
                }
        }

        if (report.getFile() != null && !report.getFile().isEmpty()) {
            entity.setFile(entity.getFile() == null ? "" + new Date().getTime() + ".prpt" : entity.getFile());
            reportFileSrv.createReportFile(entity.getFile(), report.getFile());

        } else if ((report.getFile() == null || report.getFile().isEmpty()) && (entity.getId() == null || entity.getId() == 0))
            throw new ReportFileEmptyException();

        reportDao.merge(entity);

    }

    /**
     * @param id
     */
    public void delete(Integer id) {
        ReportEntity entity = reportDao.get(id);
        reportDao.delete(entity);
        reportFileSrv.deleteReportFile(entity.getFile());
    }


    public void groupChange(List<Reports> reports) {
        for (Reports report : reports) {
            ReportEntity entity = reportDao.get(report.getId());
            entity.setReportGroup(new ReportGroupEntity(report.getGroupId()));
            reportDao.merge(entity);
        }
    }
}