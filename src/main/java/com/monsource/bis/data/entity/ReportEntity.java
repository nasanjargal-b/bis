package com.monsource.bis.data.entity;

import com.monsource.bis.core.data.DataEntity;
import com.monsource.bis.data.entity.type.ReportChartType;
import com.monsource.bis.data.entity.type.ReportType;

import javax.persistence.*;
import java.util.List;

/**
 * Created by nasanjargal on 7/6/14.
 */
@Entity
@Table(name = "report", schema = "report", catalog = "PUBLIC")
public class ReportEntity implements DataEntity {
    private Integer id;
    private String name;
    private String file;
    private Integer order;
    private Boolean group;
    private ReportChartType chart;
    private String chartCategory;
    private ReportType type;
    private String query;
    private Boolean filterDistrict;
    private BlankEntity blank;
    private ReportEntity parent;
    private List<ReportEntity> children;
    private List<ReportQuestionEntity> reportQuestions;
    private List<ReportFilterEntity> reportFilters;
    private List<ChartSeriesEntity> chartSerieses;

    public ReportEntity() {
    }

    public ReportEntity(Integer id) {
        this.id = id;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "report_seq_gen")
    @SequenceGenerator(name = "report_seq_gen", sequenceName = "report.seq_report")
    @Column(name = "id")
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Basic
    @Column(name = "name")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Basic
    @Column(name = "\"file\"")
    public String getFile() {
        return file;
    }

    public void setFile(String file) {
        this.file = file;
    }

    @Basic
    @Column(name = "\"order\"")
    public Integer getOrder() {
        return order;
    }

    public void setOrder(Integer order) {
        this.order = order;
    }

    @Basic
    @Column(name = "\"group\"")
    public Boolean getGroup() {
        return group;
    }

    public void setGroup(Boolean group) {
        this.group = group;
    }

    @Basic
    @Enumerated(EnumType.STRING)
    @Column(name = "chart")
    public ReportChartType getChart() {
        return chart;
    }

    public void setChart(ReportChartType chart) {
        this.chart = chart;
    }

    @Basic
    @Column(name = "chart_category")
    public String getChartCategory() {
        return chartCategory;
    }

    public void setChartCategory(String chartCategory) {
        this.chartCategory = chartCategory;
    }

    @Basic
    @Enumerated(EnumType.STRING)
    @Column(name = "type")
    public ReportType getType() {
        return type;
    }

    public void setType(ReportType type) {
        this.type = type;
    }

    @Basic
    @Column(name = "query")
    public String getQuery() {
        return query;
    }

    public void setQuery(String query) {
        this.query = query;
    }

    @Basic
    @Column(name = "filter_district")
    public Boolean getFilterDistrict() {
        return filterDistrict;
    }

    public void setFilterDistrict(Boolean filterDistrict) {
        this.filterDistrict = filterDistrict;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ReportEntity that = (ReportEntity) o;

        if (chart != that.chart) return false;
        if (chartCategory != null ? !chartCategory.equals(that.chartCategory) : that.chartCategory != null)
            return false;
        if (file != null ? !file.equals(that.file) : that.file != null) return false;
        if (filterDistrict != null ? !filterDistrict.equals(that.filterDistrict) : that.filterDistrict != null)
            return false;
        if (group != null ? !group.equals(that.group) : that.group != null) return false;
        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (name != null ? !name.equals(that.name) : that.name != null) return false;
        if (order != null ? !order.equals(that.order) : that.order != null) return false;
        if (query != null ? !query.equals(that.query) : that.query != null) return false;
        if (type != that.type) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (file != null ? file.hashCode() : 0);
        result = 31 * result + (order != null ? order.hashCode() : 0);
        result = 31 * result + (group != null ? group.hashCode() : 0);
        result = 31 * result + (chart != null ? chart.hashCode() : 0);
        result = 31 * result + (chartCategory != null ? chartCategory.hashCode() : 0);
        result = 31 * result + (type != null ? type.hashCode() : 0);
        result = 31 * result + (query != null ? query.hashCode() : 0);
        result = 31 * result + (filterDistrict != null ? filterDistrict.hashCode() : 0);
        return result;
    }

    @ManyToOne
    @JoinColumn(name = "parent_id", referencedColumnName = "id")
    public ReportEntity getParent() {
        return parent;
    }

    public void setParent(ReportEntity parent) {
        this.parent = parent;
    }

    @ManyToOne
    @JoinColumn(name = "blank_id", referencedColumnName = "id")
    public BlankEntity getBlank() {
        return blank;
    }

    public void setBlank(BlankEntity blank) {
        this.blank = blank;
    }

    @OneToMany(mappedBy = "parent", cascade = CascadeType.ALL, orphanRemoval = true)
    public List<ReportEntity> getChildren() {
        return children;
    }

    public void setChildren(List<ReportEntity> children) {
        this.children = children;
    }

    @OneToMany(mappedBy = "report", cascade = CascadeType.ALL, orphanRemoval = true)
    @OrderBy("order asc")
    public List<ReportQuestionEntity> getReportQuestions() {
        return reportQuestions;
    }

    public void setReportQuestions(List<ReportQuestionEntity> reportQuestions) {
        this.reportQuestions = reportQuestions;
    }

    @OneToMany(mappedBy = "report", cascade = CascadeType.ALL, orphanRemoval = true)
    @OrderBy("order asc")
    public List<ReportFilterEntity> getReportFilters() {
        return reportFilters;
    }

    public void setReportFilters(List<ReportFilterEntity> reportFilters) {
        this.reportFilters = reportFilters;
    }

    @OneToMany(mappedBy = "report", cascade = CascadeType.ALL, orphanRemoval = true)
    @OrderBy("order asc")
    public List<ChartSeriesEntity> getChartSerieses() {
        return chartSerieses;
    }

    public void setChartSerieses(List<ChartSeriesEntity> chartSerieses) {
        this.chartSerieses = chartSerieses;
    }
}
