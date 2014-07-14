package com.monsource.bis.report.model;

import com.monsource.bis.data.entity.type.ReportQuestionType;

import java.util.List;

/**
 * Created by nasanjargal on 7/14/14.
 */
public class Filter {

    private Integer id;
    private ReportQuestionType type;
    private Boolean prompt;
    private String filter;
    private Integer order;
    private Integer questionId;
    private List<Choice> choices;
    private List<Choice> qChoices;

    public Filter() {
    }

    public Filter(Integer id, ReportQuestionType type, Boolean prompt, String filter, Integer order, Integer questionId) {
        this.id = id;
        this.type = type;
        this.prompt = prompt;
        this.filter = filter;
        this.order = order;
        this.questionId = questionId;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public ReportQuestionType getType() {
        return type;
    }

    public void setType(ReportQuestionType type) {
        this.type = type;
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

    public List<Choice> getChoices() {
        return choices;
    }

    public void setChoices(List<Choice> choices) {
        this.choices = choices;
    }

    public List<Choice> getqChoices() {
        return qChoices;
    }

    public void setqChoices(List<Choice> qChoices) {
        this.qChoices = qChoices;
    }
}
