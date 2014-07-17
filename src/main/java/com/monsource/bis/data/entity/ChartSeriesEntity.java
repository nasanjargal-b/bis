package com.monsource.bis.data.entity;

import com.monsource.bis.data.entity.type.ChartSeriesType;

import javax.persistence.*;

/**
 * Created by nasanjargal on 7/16/14.
 */
@Entity
@Table(name = "chart_series", schema = "report", catalog = "bis")
public class ChartSeriesEntity {
    private Integer id;
    private String field;
    private ChartSeriesType type;
    private Integer order;
    private ReportEntity report;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "chart_series_seq_gen")
    @SequenceGenerator(name = "chart_series_seq_gen", sequenceName = "report.chart_series_id_seq")
    @Column(name = "id")
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Basic
    @Column(name = "field")
    public String getField() {
        return field;
    }

    public void setField(String field) {
        this.field = field;
    }

    @Basic
    @Enumerated(EnumType.STRING)
    @Column(name = "type")
    public ChartSeriesType getType() {
        return type;
    }

    public void setType(ChartSeriesType type) {
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ChartSeriesEntity that = (ChartSeriesEntity) o;

        if (field != null ? !field.equals(that.field) : that.field != null) return false;
        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (order != null ? !order.equals(that.order) : that.order != null) return false;
        if (type != null ? !type.equals(that.type) : that.type != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (field != null ? field.hashCode() : 0);
        result = 31 * result + (type != null ? type.hashCode() : 0);
        result = 31 * result + (order != null ? order.hashCode() : 0);
        return result;
    }

    @ManyToOne
    @JoinColumn(name = "report_id", referencedColumnName = "id", nullable = false)
    public ReportEntity getReport() {
        return report;
    }

    public void setReport(ReportEntity report) {
        this.report = report;
    }
}
