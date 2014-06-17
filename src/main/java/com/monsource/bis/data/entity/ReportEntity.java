package com.monsource.bis.data.entity;

import com.monsource.bis.core.data.DataEntity;

import javax.persistence.*;
import java.util.Set;

/**
 * Created by nasanjargal on 6/15/14.
 */
@Entity
@Table(name = "report", schema = "report", catalog = "bis")
public class ReportEntity implements DataEntity {
    private Integer id;
    private String name;
    private String file;
    private Integer order;
    private ReportGroupEntity reportGroup;
    private Set<ReportQueryEntity> reportQueries;
    private Set<ReportParamEntity> reportParams;

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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ReportEntity that = (ReportEntity) o;

        if (file != null ? !file.equals(that.file) : that.file != null) return false;
        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (name != null ? !name.equals(that.name) : that.name != null) return false;
        if (order != null ? !order.equals(that.order) : that.order != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (file != null ? file.hashCode() : 0);
        result = 31 * result + (order != null ? order.hashCode() : 0);
        return result;
    }

    @ManyToOne
    @JoinColumn(name = "report_group_id", referencedColumnName = "id", nullable = false)
    public ReportGroupEntity getReportGroup() {
        return reportGroup;
    }

    public void setReportGroup(ReportGroupEntity reportGroup) {
        this.reportGroup = reportGroup;
    }

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "report", orphanRemoval = true)
    public Set<ReportQueryEntity> getReportQueries() {
        return reportQueries;
    }

    public void setReportQueries(Set<ReportQueryEntity> reportQueries) {
        this.reportQueries = reportQueries;
    }

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "report", orphanRemoval = true)
    public Set<ReportParamEntity> getReportParams() {
        return reportParams;
    }

    public void setReportParams(Set<ReportParamEntity> reportParams) {
        this.reportParams = reportParams;
    }
}
