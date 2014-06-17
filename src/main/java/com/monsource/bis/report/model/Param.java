package com.monsource.bis.report.model;

import com.monsource.bis.core.model.Model;
import com.monsource.bis.data.entity.type.ParamType;

public class Param implements Model<Integer> {

    private Integer id;
    private String name;
    private String label;
    private ParamType type;
    private Integer order;
    private String query;

    public Param() {
    }

    /**
     * @param id
     * @param name
     * @param label
     * @param type
     * @param query
     * @param order
     */
    public Param(Integer id, String name, String label, ParamType type, String query, Integer order) {
        this.id = id;
        this.name = name;
        this.label = label;
        this.type = type;
        this.query = query;
        this.order = order;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public ParamType getType() {
        return type;
    }

    public void setType(ParamType type) {
        this.type = type;
    }

    public Integer getOrder() {
        return order;
    }

    public void setOrder(Integer order) {
        this.order = order;
    }

    public String getQuery() {
        return query;
    }

    public void setQuery(String query) {
        this.query = query;
    }
}