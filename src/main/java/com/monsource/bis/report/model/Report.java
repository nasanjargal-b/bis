package com.monsource.bis.report.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.monsource.bis.core.model.Model;
import com.monsource.bis.core.model.TreeModel;
import com.monsource.bis.data.entity.type.ReportChartType;
import com.monsource.bis.data.entity.type.ReportType;

import java.util.List;

/**
 * Created by nasanjargal on 7/7/14.
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class Report implements TreeModel<Integer> {
    private Integer id;
    private String name;
    private Integer parentId;
    private String parentName;
    private String blankId;
    private String blankName;
    private boolean group = false;
    private ReportChartType chart;
    private String chartCategory;
    private Integer order;
    private ReportType type;
    private String query;
    private String file;
    private Boolean filterDistrict;
    private List<Column> columns;
    private List<Filter> filters;
    private List<ChartSeries> chartSerieses;
    private List<Parameter> parameters;
    private List<Report> children;

    public Report() {
    }

    public Report(Integer id, String name, Integer parentId, String parentName, String blankId, String blankName, ReportChartType chart, String chartCategory, Integer order, ReportType type, String query, Boolean filterDistrict) {
        this.id = id;
        this.name = name;
        this.parentId = parentId;
        this.parentName = parentName;
        this.blankId = blankId;
        this.blankName = blankName;
        this.chart = chart;
        this.chartCategory = chartCategory;
        this.order = order;
        this.type = type;
        this.query = query;
        this.filterDistrict = filterDistrict;
    }

    public Report(Integer id, String name, Integer parentId, String parentName, String blankId, String blankName, boolean group, ReportChartType chart, String chartCategory, Integer order, ReportType type, String query, Boolean filterDistrict) {
        this.id = id;
        this.name = name;
        this.parentId = parentId;
        this.parentName = parentName;
        this.blankId = blankId;
        this.blankName = blankName;
        this.group = group;
        this.chart = chart;
        this.chartCategory = chartCategory;
        this.order = order;
        this.type = type;
        this.query = query;
        this.filterDistrict = filterDistrict;
    }

    public String getFile() {
        return file;
    }

    public void setFile(String file) {
        this.file = file;
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
        return parentName;
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

    public String getChartCategory() {
        return chartCategory;
    }

    public void setChartCategory(String chartCategory) {
        this.chartCategory = chartCategory;
    }

    public Integer getOrder() {
        return order;
    }

    public void setOrder(Integer order) {
        this.order = order;
    }

    public ReportType getType() {
        return type;
    }

    public void setType(ReportType type) {
        this.type = type;
    }

    public String getQuery() {
        return query;
    }

    public void setQuery(String query) {
        this.query = query;
    }

    public Boolean getFilterDistrict() {
        return filterDistrict;
    }

    public void setFilterDistrict(Boolean filterDistrict) {
        this.filterDistrict = filterDistrict;
    }

    public List<Column> getColumns() {
        return columns;
    }

    public void setColumns(List<Column> columns) {
        this.columns = columns;
    }

    public List<Filter> getFilters() {
        return filters;
    }

    public void setFilters(List<Filter> filters) {
        this.filters = filters;
    }

    public List<ChartSeries> getChartSerieses() {
        return chartSerieses;
    }

    public void setChartSerieses(List<ChartSeries> chartSerieses) {
        this.chartSerieses = chartSerieses;
    }

    public List<Parameter> getParameters() {
        return parameters;
    }

    public void setParameters(List<Parameter> parameters) {
        this.parameters = parameters;
    }

    @Override
    public boolean isLeaf() {
        return !group;
    }

    @Override
    public List<Report> getChildren() {
        return children;
    }

    public void setChildren(List<Report> children) {
        this.children = children;
    }
}
