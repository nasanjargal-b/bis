package com.monsource.bis.blank.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.monsource.bis.core.model.Model;

import java.util.*;

@JsonSerialize(include= JsonSerialize.Inclusion.NON_EMPTY)
public class Blank implements Model<String> {

    private String id;
    private String name;
    private String blankGroupId;
    private List<Question> questions;

    public Blank() {
    }

    public Blank(String id, String name, String blankGroupId) {
        this.id = id;
        this.name = name;
        this.blankGroupId = blankGroupId;
    }

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBlankGroupId() {
        return this.blankGroupId;
    }

    public void setBlankGroupId(String blankGroupId) {
        this.blankGroupId = blankGroupId;
    }

    public List<Question> getQuestions() {
        return this.questions;
    }

    public void setQuestions(List<Question> questions) {
        this.questions = questions;
    }

}