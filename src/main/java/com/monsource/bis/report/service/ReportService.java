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
            QuestionEntity question = reportQuestionEntity.getQuestion();
            Column column = new Column(
                    reportQuestionEntity.getId(),
                    reportQuestionEntity.getName(),
                    reportQuestionEntity.getCode(),
                    reportQuestionEntity.getType(),
                    reportQuestionEntity.getCalcType(),
                    reportQuestionEntity.getColumnType(),
                    question == null ? null : question.getId(),
                    reportQuestionEntity.getFilter(),
                    reportQuestionEntity.getChoice() == null ? null : reportQuestionEntity.getChoice().getId()
            );

            if (question != null && (question.getType() == QuestionType.MULTIPLE_CHOICE || question.getType() == QuestionType.SINGLE_CHOICE)) {
                List<ChoiceEntity> choiceEntities = question.getChoices();
                column.setChoices(new ArrayList<Choice>());
                column.getChoices().add(new Choice(null, "", ""));
                for (ChoiceEntity choiceEntity : choiceEntities) {
                    column.getChoices().add(new Choice(choiceEntity.getId(), choiceEntity.getCode(), choiceEntity.getText()));
                }
            }

            report.getColumns().add(column);

        }

        report.setFilters(new ArrayList<Filter>());
        for (ReportFilterEntity reportFilterEntity : reportEntity.getReportFilters()) {
            report.getFilters().add(new Filter(
                    reportFilterEntity.getId(),
                    reportFilterEntity.getType(),
                    reportFilterEntity.getPrompt(),
                    reportFilterEntity.getFilter(),
                    reportFilterEntity.getOrder(),
                    reportFilterEntity.getQuestion() == null ? null : reportFilterEntity.getQuestion().getId()
            ));
        }

        return report;
    }

    /**
     * @param report
     */
    public Integer save(Report report) {
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

            String filter = column.getFilter();
            if (filter != null && filter.replaceAll(" ", "").equals("")) {
                filter = null;
            }

            ReportQuestionEntity reportQuestionEntity = new ReportQuestionEntity();

            reportQuestionEntity.setId(column.getId());
            reportQuestionEntity.setCode(column.getCode());
            reportQuestionEntity.setName(column.getName());
            reportQuestionEntity.setType(column.getType());
            reportQuestionEntity.setCalcType(column.getCalcType());
            reportQuestionEntity.setColumnType(column.getColumnType());
            reportQuestionEntity.setFilter(filter);
            reportQuestionEntity.setOrder(order++);
            reportQuestionEntity.setReport(reportEntity);
            if (column.getQuestionId() != null)
                reportQuestionEntity.setQuestion(new QuestionEntity(column.getQuestionId()));

            if (column.getChoiceId() != null)
                reportQuestionEntity.setChoice(new ChoiceEntity(column.getChoiceId()));

            reportEntity.getReportQuestions().add(reportQuestionEntity);
        }

        reportEntity = reportDao.merge(reportEntity);

        return reportEntity.getId();

    }

    /**
     * @param reports
     */
    public void delete(List<Report> reports) {
        // TODO - implement ReportService.delete
        throw new UnsupportedOperationException();
    }

}