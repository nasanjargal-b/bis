package com.monsource.bis.report.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.monsource.bis.core.model.Model;
import org.springframework.web.multipart.MultipartFile;

import java.util.*;

public class Report implements Model<Integer> {
    private Integer id;
    private String name;
    private Integer reportGroupId;
    private String reportGroupName;
    private Integer order;
    @JsonIgnore
    private MultipartFile file;
    private List<Query> queries;
    private List<Param> params;

    @Override
    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getReportGroupId() {
        return this.reportGroupId;
    }

    public void setReportGroupId(Integer reportGroupId) {
        this.reportGroupId = reportGroupId;
    }

    public String getReportGroupName() {
        return reportGroupName;
    }

    public void setReportGroupName(String reportGroupName) {
        this.reportGroupName = reportGroupName;
    }

    public MultipartFile getFile() {
        return this.file;
    }

    public void setFile(MultipartFile file) {
        this.file = file;
    }

    public Integer getOrder() {
        return this.order;
    }

    public void setOrder(Integer order) {
        this.order = order;
    }

    public List<Query> getQueries() {
        return this.queries;
    }

    public void setQueries(List<Query> queries) {
        this.queries = queries;
    }

    public List<Param> getParams() {
        return this.params;
    }

    public void setParams(List<Param> params) {
        this.params = params;
    }
}