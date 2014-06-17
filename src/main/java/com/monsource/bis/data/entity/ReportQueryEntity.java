package com.monsource.bis.data.entity;

import com.monsource.bis.core.data.DataEntity;

import javax.persistence.*;
import java.util.Set;

/**
 * Created by nasanjargal on 6/15/14.
 */
@Entity
@Table(name = "report_query", schema = "report", catalog = "bis")
public class ReportQueryEntity implements DataEntity {
    private Integer id;
    private String name;
    private String query;
    private ReportEntity report;
    private Set<ReportParamEntity> reportParams;

    public ReportQueryEntity() {
    }

    public ReportQueryEntity(Integer id, String name, String query, ReportEntity report) {
        this.id = id;
        this.name = name;
        this.query = query;
        this.report = report;
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
    @Column(name = "query")
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

        ReportQueryEntity that = (ReportQueryEntity) o;

        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (name != null ? !name.equals(that.name) : that.name != null) return false;
        if (query != null ? !query.equals(that.query) : that.query != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (query != null ? query.hashCode() : 0);
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

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "reportQuery", orphanRemoval = true)
    public Set<ReportParamEntity> getReportParams() {
        return reportParams;
    }

    public void setReportParams(Set<ReportParamEntity> reportParams) {
        this.reportParams = reportParams;
    }
}
