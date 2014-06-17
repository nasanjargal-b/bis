package com.monsource.bis.data.entity;

import com.monsource.bis.core.data.DataEntity;

import javax.persistence.*;
import java.util.Set;

/**
 * Created by nasanjargal on 6/15/14.
 */
@Entity
@Table(name = "report_group", schema = "report", catalog = "bis")
public class ReportGroupEntity implements DataEntity {
    private Integer id;
    private String name;
    private Integer order;
    private Set<ReportEntity> reports;
    private ReportGroupEntity parentGroup;
    private Set<ReportGroupEntity> childrenGroup;

    public ReportGroupEntity() {
    }

    public ReportGroupEntity(Integer id) {
        this.id = id;
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

        ReportGroupEntity that = (ReportGroupEntity) o;

        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (name != null ? !name.equals(that.name) : that.name != null) return false;
        if (order != null ? !order.equals(that.order) : that.order != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (order != null ? order.hashCode() : 0);
        return result;
    }

    @OneToMany(mappedBy = "reportGroup", cascade = CascadeType.REMOVE)
    public Set<ReportEntity> getReports() {
        return reports;
    }

    public void setReports(Set<ReportEntity> reports) {
        this.reports = reports;
    }

    @ManyToOne
    @JoinColumn(name = "parent_id", referencedColumnName = "id", nullable = true)
    public ReportGroupEntity getParentGroup() {
        return parentGroup;
    }

    public void setParentGroup(ReportGroupEntity parentGroup) {
        this.parentGroup = parentGroup;
    }

    @OneToMany(mappedBy = "parentGroup")
    public Set<ReportGroupEntity> getChildrenGroup() {
        return childrenGroup;
    }

    public void setChildrenGroup(Set<ReportGroupEntity> childrenGroup) {
        this.childrenGroup = childrenGroup;
    }
}
