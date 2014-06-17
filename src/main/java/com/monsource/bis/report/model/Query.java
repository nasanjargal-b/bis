package com.monsource.bis.report.model;

import com.monsource.bis.core.model.Model;

import java.util.*;

public class Query implements Model<Integer> {

	private List<Param> params;
	private Integer id;
	private String query;
	private String name;

    public Query() {
    }

    /**
	 * 
	 * @param id
	 * @param name
	 * @param query
	 */
	public Query(Integer id, String name, String query) {
        this.id = id;
        this.name = name;
        this.query = query;
    }

    public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getQuery() {
		return this.query;
	}

	public void setQuery(String query) {
		this.query = query;
	}

	public List<Param> getParams() {
		return this.params;
	}

	public void setParams(List<Param> params) {
		this.params = params;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

}