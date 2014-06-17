package com.monsource.bis.data.entity;

import com.monsource.bis.core.data.DataEntity;
import com.monsource.bis.data.entity.type.ParamType;

import javax.persistence.*;

/**
 * Created by nasanjargal on 6/15/14.
 */
@Entity
@Table(name = "report_param", schema = "report", catalog = "bis")
public class ReportParamEntity implements DataEntity {
    private Integer id;
    private String name;
    private String label;
    private ParamType type;
    private Integer order;
    private String query;
    private ReportEntity report;
    private ReportQueryEntity reportQuery;

    public ReportParamEntity() {
    }

    public ReportParamEntity(Integer id, String name, String label, ParamType type, Integer order, String query, ReportEntity report) {
        this.id = id;
        this.name = name;
        this.label = label;
        this.type = type;
        this.order = order;
        this.query = query;
        this.report = report;
    }

    public ReportParamEntity(Integer id, String name, String label, ParamType type, Integer order, String query, ReportQueryEntity reportQuery) {
        this.id = id;
        this.name = name;
        this.label = label;
        this.type = type;
        this.order = order;
        this.query = query;
        this.reportQuery = reportQuery;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
    @Column(name = "label")
    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    @Basic
    @Enumerated(EnumType.STRING)
    @Column(name = "type")
    public ParamType getType() {
        return type;
    }

    public void setType(ParamType type) {
        this.type = type;
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
    @Column(name = "\"query\"")
    public String getQuery() {
        return query;
    }

    public void setQuery(String query) {
        this.query = query;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ReportParamEntity that = (ReportParamEntity) o;

        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (label != null ? !label.equals(that.label) : that.label != null) return false;
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
        result = 31 * result + (label != null ? label.hashCode() : 0);
        result = 31 * result + (type != null ? type.hashCode() : 0);
        result = 31 * result + (order != null ? order.hashCode() : 0);
        result = 31 * result + (query != null ? query.hashCode() : 0);
        return result;
    }

    @ManyToOne
    @JoinColumn(name = "report_id", referencedColumnName = "id")
    public ReportEntity getReport() {
        return report;
    }

    public void setReport(ReportEntity report) {
        this.report = report;
    }

    @ManyToOne
    @JoinColumn(name = "report_query_id", referencedColumnName = "id")
    public ReportQueryEntity getReportQuery() {
        return reportQuery;
    }

    public void setReportQuery(ReportQueryEntity reportQuery) {
        this.reportQuery = reportQuery;
    }
}
