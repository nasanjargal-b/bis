package com.monsource.bis.report.model;

import com.monsource.bis.blank.model.QuestionType;
import com.monsource.bis.data.entity.type.ReportQuestionType;

import java.util.List;

/**
 * Created by nasanjargal on 7/14/14.
 */
public class Filter {

    private Integer id;
    private String code;
    private ReportQuestionType type;
    private QuestionType columnType;
    private Boolean prompt;
    private String filter;
    private Integer order;
    private Integer questionId;
    private Integer researchId;
    private Integer cityId;
    private Integer districtId;
    private List<Integer> choiceIds;
    private List<Choice> choices;

    public Filter() {
    }

    public Filter(Integer id, String code, ReportQuestionType type, QuestionType columnType, Boolean prompt, String filter, Integer order, Integer questionId, Integer researchId, Integer cityId, Integer districtId) {
        this.id = id;
        this.code = code;
        this.type = type;
        this.columnType = columnType;
        this.prompt = prompt;
        this.filter = filter;
        this.order = order;
        this.questionId = questionId;
        this.researchId = researchId;
        this.cityId = cityId;
        this.districtId = districtId;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public ReportQuestionType getType() {
        return type;
    }

    public void setType(ReportQuestionType type) {
        this.type = type;
    }

    public QuestionType getColumnType() {
        return columnType;
    }

    public void setColumnType(QuestionType columnType) {
        this.columnType = columnType;
    }

    public Boolean getPrompt() {
        return prompt;
    }

    public void setPrompt(Boolean prompt) {
        this.prompt = prompt;
    }

    public String getFilter() {
        return filter;
    }

    public void setFilter(String filter) {
        this.filter = filter;
    }

    public Integer getOrder() {
        return order;
    }

    public void setOrder(Integer order) {
        this.order = order;
    }

    public Integer getQuestionId() {
        return questionId;
    }

    public void setQuestionId(Integer questionId) {
        this.questionId = questionId;
    }

    public Integer getResearchId() {
        return researchId;
    }

    public void setResearchId(Integer researchId) {
        this.researchId = researchId;
    }

    public Integer getCityId() {
        return cityId;
    }

    public void setCityId(Integer cityId) {
        this.cityId = cityId;
    }

    public Integer getDistrictId() {
        return districtId;
    }

    public void setDistrictId(Integer districtId) {
        this.districtId = districtId;
    }

    public List<Integer> getChoiceIds() {
        return choiceIds;
    }

    public void setChoiceIds(List<Integer> choiceIds) {
        this.choiceIds = choiceIds;
    }

    public List<Choice> getChoices() {
        return choices;
    }

    public void setChoices(List<Choice> choices) {
        this.choices = choices;
    }
}
