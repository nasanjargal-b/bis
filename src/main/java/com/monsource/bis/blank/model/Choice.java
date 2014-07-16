package com.monsource.bis.blank.model;

import com.monsource.bis.core.model.Model;

/**
 * Created by nasanjargal on 6/20/14.
 */
public class Choice implements Model<Integer> {

    private Integer id;
    private String code;
    private String text;

    public Choice() {
    }

    public Choice(Integer id, String code, String text) {
        this.id = id;
        this.code = code;
        this.text = text;
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
}
