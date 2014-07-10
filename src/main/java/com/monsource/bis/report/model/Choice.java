package com.monsource.bis.report.model;

import com.monsource.bis.core.model.Model;

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

}