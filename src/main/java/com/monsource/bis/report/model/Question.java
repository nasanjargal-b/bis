package com.monsource.bis.report.model;

import java.util.*;

import com.monsource.bis.blank.model.*;

public class Question {

    private Integer id;
    private String code;
    private String text;
    private QuestionType type;
    private List<Choice> choices;

    public Question() {
    }

    public Question(Integer id, String code, String text, QuestionType type) {
        this.id = id;
        this.code = code;
        this.text = text;
        this.type = type;
    }

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCode() {
        return this.code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getText() {
        return this.text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public QuestionType getType() {
        return this.type;
    }

    public void setType(QuestionType type) {
        this.type = type;
    }

    public List<Choice> getChoices() {
        return choices;
    }

    public void setChoices(List<Choice> choices) {
        this.choices = choices;
    }
}