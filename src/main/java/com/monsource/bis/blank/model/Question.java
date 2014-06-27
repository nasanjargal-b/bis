package com.monsource.bis.blank.model;

import com.monsource.bis.core.model.TreeModel;

import java.util.*;

public class Question implements TreeModel<Integer> {

    private Integer id;
    private String code;
    private String text;
    private QuestionType type;
    private String format;
    private Integer order;
    private List<Choice> choices;
    private List<Question> children;

    public Question() {
    }

    public Question(Integer id, String code, String text, QuestionType type, String format, Integer order) {
        this.id = id;
        this.code = code;
        this.text = text;
        this.type = type;
        this.format = format;
        this.order = order;
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

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public QuestionType getType() {
        return type;
    }

    public void setType(QuestionType type) {
        this.type = type;
    }

    public String getFormat() {
        return format;
    }

    public void setFormat(String format) {
        this.format = format;
    }

    public Integer getOrder() {
        return order;
    }

    public void setOrder(Integer order) {
        this.order = order;
    }

    public List<Choice> getChoices() {
        return choices;
    }

    public void setChoices(List<Choice> choices) {
        this.choices = choices;
    }

    public List<Question> getChildren() {
        return children;
    }

    public void setChildren(List<Question> children) {
        this.children = children;
    }

    @Override
    public String getName() {
        return text;
    }

    @Override
    public boolean isLeaf() {
        return type != QuestionType.GROUP;
    }
}