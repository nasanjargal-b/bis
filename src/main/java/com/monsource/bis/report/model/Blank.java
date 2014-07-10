package com.monsource.bis.report.model;

import java.util.*;

public class Blank {

	private String id;
    private String name;
    private List<Question> questions;

    public Blank() {
    }

    public Blank(String id, String name) {
        this.id = id;
        this.name = name;
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

    public List<Question> getQuestions() {
        return questions;
    }

    public void setQuestions(List<Question> questions) {
        this.questions = questions;
    }
}