package com.monsource.bis.report.model;

import com.monsource.bis.blank.model.QuestionType;
import com.monsource.bis.core.model.Model;
import com.monsource.bis.data.entity.type.ReportCalcType;
import com.monsource.bis.data.entity.type.ReportQuestionType;

import java.util.*;

/**
 * Created by nasanjargal on 7/7/14.
 */
public class Column implements Model<Integer> {

    private Integer id;
    private String name;
    private String code;
    private ReportQuestionType type;
    private ReportCalcType calcType;
    private QuestionType columnType;
    private Integer questionId;
    private String filter;
    private Integer choiceId;
    private Boolean percent = false;
    private List<Choice> choices;

    public Column() {
    }

    public Column(Integer id, String name, String code, ReportQuestionType type, ReportCalcType calcType, QuestionType columnType, Integer questionId, String filter, Integer choiceId, Boolean percent) {
        this.id = id;
        this.name = name;
        this.code = code;
        this.type = type;
        this.calcType = calcType;
        this.columnType = columnType;
        this.questionId = questionId;
        this.filter = filter;
        this.choiceId = choiceId;
        this.percent = percent == null ? false : percent;
    }

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public ReportQuestionType getType() {
        return this.type;
    }

    public void setType(ReportQuestionType type) {
        this.type = type;
    }

    public ReportCalcType getCalcType() {
        return calcType;
    }

    public void setCalcType(ReportCalcType calcType) {
        this.calcType = calcType;
    }

    public QuestionType getColumnType() {
        return columnType;
    }

    public void setColumnType(QuestionType columnType) {
        this.columnType = columnType;
    }

    public Integer getQuestionId() {
        return this.questionId;
    }

    public void setQuestionId(Integer questionId) {
        this.questionId = questionId;
    }

    public String getFilter() {
        return filter;
    }

    public void setFilter(String filter) {
        this.filter = filter;
    }

    public Integer getChoiceId() {
        return choiceId;
    }

    public void setChoiceId(Integer choiceId) {
        this.choiceId = choiceId;
    }

    public Boolean getPercent() {
        return percent;
    }

    public void setPercent(Boolean percent) {
        this.percent = percent == null ? false : percent;
    }

    public List<Choice> getChoices() {
        return choices;
    }

    public void setChoices(List<Choice> choices) {
        this.choices = choices;
    }
}
