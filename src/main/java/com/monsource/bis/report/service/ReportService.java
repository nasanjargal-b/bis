package com.monsource.bis.report.service;

import com.monsource.bis.blank.model.QuestionType;
import com.monsource.bis.data.entity.*;
import com.monsource.bis.data.entity.type.ReportType;
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
                reportEntity.getBlank() == null ? null : reportEntity.getBlank().getId(),
                reportEntity.getBlank() == null ? null : reportEntity.getBlank().getName(),
                reportEntity.getChart(),
                reportEntity.getChartCategory(),
                reportEntity.getOrder(),
                reportEntity.getType(),
                reportEntity.getQuery(),
                reportEntity.getFilterDistrict()
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
                    reportQuestionEntity.getSummaryType(),
                    question == null ? null : question.getId(),
                    reportQuestionEntity.getFilter(),
                    reportQuestionEntity.getChoice() == null ? null : reportQuestionEntity.getChoice().getId(),
                    reportQuestionEntity.getPercent()
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
            QuestionEntity question = reportFilterEntity.getQuestion();
            ResearchEntity research = reportFilterEntity.getResearch();
            CityEntity city = reportFilterEntity.getCity();
            DistrictEntity district = reportFilterEntity.getDistrict();
            Filter filter = new Filter(
                    reportFilterEntity.getId(),
                    question == null ? null : question.getCode(),
                    reportFilterEntity.getType(),
                    reportFilterEntity.getColumnType(),
                    reportFilterEntity.getPrompt(),
                    reportFilterEntity.getFilter(),
                    reportFilterEntity.getOrder(),
                    question == null ? null : question.getId(),
                    research == null ? null : research.getId(),
                    city == null ? null : city.getId(),
                    district == null ? null : district.getId()
            );

            filter.setChoiceIds(new ArrayList<Integer>());
            for (ChoiceEntity choiceEntity : reportFilterEntity.getChoices()) {
                filter.getChoiceIds().add(choiceEntity.getId());
            }

            if (question != null && (question.getType() == QuestionType.MULTIPLE_CHOICE || question.getType() == QuestionType.SINGLE_CHOICE)) {
                filter.setChoices(new ArrayList<Choice>());
                for (ChoiceEntity choiceEntity : question.getChoices()) {
                    filter.getChoices().add(new Choice(choiceEntity.getId(), choiceEntity.getCode(), choiceEntity.getText()));
                }
            }

            switch (filter.getType()) {
                case RESEARCH:
                    filter.setCode("$R");
                    break;
                case CITY:
                    filter.setCode("$C");
                    break;
                case DISTRICT:
                    filter.setCode("$D");
                    break;
            }

            report.getFilters().add(filter);
        }

        report.setChartSerieses(new ArrayList<ChartSeries>());
        for (ChartSeriesEntity chartSeriesEntity : reportEntity.getChartSerieses()) {
            report.getChartSerieses().add(new ChartSeries(chartSeriesEntity.getId(), chartSeriesEntity.getField(), chartSeriesEntity.getType()));
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
            reportEntity.setOrder(Integer.MAX_VALUE);
            reportEntity.setReportQuestions(new ArrayList<ReportQuestionEntity>());
            reportEntity.setReportFilters(new ArrayList<ReportFilterEntity>());
            reportEntity.setChartSerieses(new ArrayList<ChartSeriesEntity>());
        } else {
            reportEntity = reportDao.get(report.getId());
            reportEntity.getReportQuestions().clear();
            reportEntity.getReportFilters().clear();
            reportEntity.getChartSerieses().clear();
        }

        reportEntity.setName(report.getName());
        reportEntity.setGroup(report.isGroup());
        reportEntity.setChart(report.getChart());
        reportEntity.setChartCategory(report.getChartCategory());
        reportEntity.setQuery(clearQuery(report.getQuery()));
        reportEntity.setType(report.getType());
        reportEntity.setFilterDistrict(report.getFilterDistrict() == null ? false : report.getFilterDistrict());

        if (report.getParentId() != null)
            reportEntity.setParent(new ReportEntity(report.getParentId()));
        if (report.getBlankId() != null)
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
            reportQuestionEntity.setSummaryType(column.getSummaryType());
            reportQuestionEntity.setFilter(filter);
            reportQuestionEntity.setOrder(order++);
            reportQuestionEntity.setReport(reportEntity);
            reportQuestionEntity.setPercent(column.getPercent());
            if (column.getQuestionId() != null)
                reportQuestionEntity.setQuestion(new QuestionEntity(column.getQuestionId()));

            if (column.getChoiceId() != null)
                reportQuestionEntity.setChoice(new ChoiceEntity(column.getChoiceId()));

            reportEntity.getReportQuestions().add(reportQuestionEntity);
        }
        order = 0;
        for (Filter filter : report.getFilters()) {
            String filterTxt = filter.getFilter();
            if (filterTxt != null && filterTxt.replaceAll(" ", "").equals("")) {
                filterTxt = null;
            }

            ReportFilterEntity reportFilterEntity = new ReportFilterEntity();

            reportFilterEntity.setId(filter.getId());
            reportFilterEntity.setType(filter.getType());
            reportFilterEntity.setColumnType(filter.getColumnType());
            reportFilterEntity.setPrompt(filter.getPrompt());
            reportFilterEntity.setFilter(filterTxt);
            reportFilterEntity.setOrder(order++);
            reportFilterEntity.setQuestion(filter.getQuestionId() == null ? null : new QuestionEntity(filter.getQuestionId()));
            reportFilterEntity.setReport(reportEntity);

            reportFilterEntity.setResearch(filter.getResearchId() == null ? null : new ResearchEntity(filter.getResearchId()));
            reportFilterEntity.setCity(filter.getCityId() == null ? null : new CityEntity(filter.getCityId()));
            reportFilterEntity.setDistrict(filter.getDistrictId() == null ? null : new DistrictEntity(filter.getDistrictId()));

            if (filter.getChoiceIds() != null) {
                reportFilterEntity.setChoices(new ArrayList<ChoiceEntity>());
                for (Integer choiceId : filter.getChoiceIds()) {
                    reportFilterEntity.getChoices().add(new ChoiceEntity(choiceId));
                }
            }
            reportEntity.getReportFilters().add(reportFilterEntity);
        }

        order = 0;
        for (ChartSeries chartSeries : report.getChartSerieses()) {
            ChartSeriesEntity chartSeriesEntity = new ChartSeriesEntity();
            chartSeriesEntity.setId(chartSeries.getId());
            chartSeriesEntity.setType(chartSeries.getType());
            chartSeriesEntity.setField(chartSeries.getField());
            chartSeriesEntity.setReport(reportEntity);
            chartSeriesEntity.setOrder(order);

            reportEntity.getChartSerieses().add(chartSeriesEntity);

        }

        reportEntity = reportDao.merge(reportEntity);

        return reportEntity.getId();

    }

    private String clearQuery(String query) {
        if (query == null) return null;

//        query = query.replace("\n", " ");
        query = query.substring(query.indexOf("SELECT"));
        return query;
    }

    public void saveOrder(List<Report> reports, Integer order, ReportEntity parent) {
        for (Report report : reports) {
            ReportEntity reportEntity = reportDao.get(report.getId());
            reportEntity.setOrder(order++);
            reportEntity.setParent(parent);
            reportDao.merge(reportEntity);
            saveOrder(report.getChildren(), order, reportEntity);
        }
    }

    /**
     * @param reports
     */
    public void delete(List<Report> reports) {
        for (Report report : reports) {
            ReportEntity reportEntity = reportDao.get(report.getId());
            reportDao.delete(reportEntity);
        }

        reportDao.flush();
    }
}