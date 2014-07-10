package com.monsource.bis.report.model;

import com.monsource.bis.core.model.Model;
import com.monsource.bis.core.model.TreeModel;
import com.monsource.bis.data.entity.type.ReportChartType;

import java.util.List;

/**
 * Created by nasanjargal on 7/7/14.
 */
public class Report implements TreeModel<Integer> {
    private Integer id;
    private String name;
    private Integer parentId;
    private String parentName;
    private String blankId;
    private String blankName;
    private boolean group = false;
    private ReportChartType chart;
    private Integer order;
    private List<Column> columns;

    public Report() {
    }

    public Report(Integer id, String name, Integer parentId, String parentName, String blankId, String blankName, ReportChartType chart, Integer order) {
        this.id = id;
        this.name = name;
        this.parentId = parentId;
        this.parentName = parentName;
        this.blankId = blankId;
        this.blankName = blankName;
        this.chart = chart;
        this.order = order;
    }

    public Report(Integer id, String name, Integer parentId, String parentName, String blankId, String blankName, boolean group, ReportChartType chart, Integer order) {
        this.id = id;
        this.name = name;
        this.parentId = parentId;
        this.parentName = parentName;
        this.blankId = blankId;
        this.blankName = blankName;
        this.group = group;
        this.chart = chart;
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

    public Integer getParentId() {
        return parentId;
    }

    public void setParentId(Integer parentId) {
        this.parentId = parentId;
    }

    public String getParentName() {
        return this.parentName;
    }

    public void setParentName(String parentName) {
        this.parentName = parentName;
    }

    public String getBlankId() {
        return blankId;
    }

    public void setBlankId(String blankId) {
        this.blankId = blankId;
    }

    public String getBlankName() {
        return blankName;
    }

    public void setBlankName(String blankName) {
        this.blankName = blankName;
    }

    public boolean isGroup() {
        return group;
    }

    public void setGroup(boolean group) {
        this.group = group;
    }

    public ReportChartType getChart() {
        return chart;
    }

    public void setChart(ReportChartType chart) {
        this.chart = chart;
    }

    public Integer getOrder() {
        return order;
    }

    public void setOrder(Integer order) {
        this.order = order;
    }

    public List<Column> getColumns() {
        return columns;
    }

    public void setColumns(List<Column> columns) {
        this.columns = columns;
    }

    @Override
    public boolean isLeaf() {
        return !group;
    }

    @Override
    public List getChildren() {
        return null;
    }
}
