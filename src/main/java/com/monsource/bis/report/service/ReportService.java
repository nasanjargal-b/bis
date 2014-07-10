package com.monsource.bis.report.service;

import com.monsource.bis.blank.model.QuestionType;
import com.monsource.bis.data.entity.*;
import com.monsource.bis.report.model.*;
import com.monsource.bis.report.dao.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ReportService {

    @Autowired
    ReportDao reportDao;

    /**
     * @param id
     */
    public Report get(Integer id) {
        ReportEntity reportEntity = reportDao.get(id);
        Report report = new Report(
                reportEntity.getId(),
                reportEntity.getName(),
                reportEntity.getParent() == null ? null : reportEntity.getParent().getId(),
                reportEntity.getParent() == null ? null : reportEntity.getParent().getName(),
                reportEntity.getBlank().getId(),
                reportEntity.getBlank().getName(),
                reportEntity.getChart(),
                reportEntity.getOrder()
        );

        report.setColumns(new ArrayList<Column>());

        for (ReportQuestionEntity reportQuestionEntity : reportEntity.getReportQuestions()) {
            Column column = new Column(
                    reportQuestionEntity.getId(),
                    reportQuestionEntity.getName(),
                    reportQuestionEntity.getCode(),
                    reportQuestionEntity.getType(),
                    reportQuestionEntity.getCalcType(),
                    reportQuestionEntity.getColumnType(),
                    reportQuestionEntity.getQuestion() == null ? null : reportQuestionEntity.getQuestion().getId(),
                    reportQuestionEntity.getFilter(),
                    reportQuestionEntity.getChoice() == null ? null : reportQuestionEntity.getChoice().getId()
            );

            report.getColumns().add(column);

        }

        return report;
    }

    /**
     * @param report
     */
    public void save(Report report) {
        ReportEntity reportEntity;
        if (report.getId() == null) {
            reportEntity = new ReportEntity();
            reportEntity.setId(report.getId());
            reportEntity.setReportQuestions(new ArrayList<ReportQuestionEntity>());
        } else {
            reportEntity = reportDao.get(report.getId());
            reportEntity.getReportQuestions().clear();
        }


        reportEntity.setName(report.getName());
        reportEntity.setOrder(report.getOrder());
        reportEntity.setGroup(false);
        reportEntity.setChart(report.getChart());
        if (report.getParentId() != null)
            reportEntity.setParent(new ReportEntity(report.getParentId()));
        reportEntity.setBlank(new BlankEntity(report.getBlankId()));

        int order = 0;
        for (Column column : report.getColumns()) {
            ReportQuestionEntity reportQuestionEntity = new ReportQuestionEntity();

            reportQuestionEntity.setId(column.getId());
            reportQuestionEntity.setCode(column.getCode());
            reportQuestionEntity.setName(column.getName());
            reportQuestionEntity.setType(column.getType());
            reportQuestionEntity.setCalcType(column.getCalcType());
            reportQuestionEntity.setColumnType(column.getColumnType());
            reportQuestionEntity.setFilter(column.getFilter());
            reportQuestionEntity.setOrder(order++);
            reportQuestionEntity.setReport(reportEntity);
            if (column.getQuestionId() != null)
                reportQuestionEntity.setQuestion(new QuestionEntity(column.getQuestionId()));

            if (column.getChoiceId() != null)
                reportQuestionEntity.setChoice(new ChoiceEntity(column.getChoiceId()));

            reportEntity.getReportQuestions().add(reportQuestionEntity);
        }

        reportDao.merge(reportEntity);

    }

    /**
     * @param reports
     */
    public void delete(List<Report> reports) {
        // TODO - implement ReportService.delete
        throw new UnsupportedOperationException();
    }

}