package com.monsource.bis.blank.model;

import java.io.Serializable;
import java.util.List;

/**
 * Created by nasanjargal on 6/30/14.
 */
public class MetaData implements Serializable {
    private Integer id;
    private String code;
    private String text;
    private QuestionType type;
    private String format;
    private List<Choice> choices;

    public MetaData() {
    }

    public MetaData(Integer id, String code, String text, QuestionType type, String format, List<Choice> choices) {
        this.id = id;
        this.code = code;
        this.text = text;
        this.type = type;
        this.format = format;
        this.choices = choices;
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

    public List<Choice> getChoices() {
        return choices;
    }

    public void setChoices(List<Choice> choices) {
        this.choices = choices;
    }
}
