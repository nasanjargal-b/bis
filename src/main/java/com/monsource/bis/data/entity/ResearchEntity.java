package com.monsource.bis.data.entity;

import com.monsource.bis.core.data.DataEntity;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

/**
 * Created by nasanjargal on 5/14/14.
 */
@Entity
@Table(name = "research", schema = "registration", catalog = "bis")
public class ResearchEntity implements DataEntity {
    private Integer id;
    private Integer year;
    private boolean active;
    private Date startDate;
    private Date endDate;
    private String description;
    private Set<BlankEntity> blanks;

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
    @Column(name = "year")
    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    @Basic
    @Column(name = "active")
    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    @Basic
    @Column(name = "start_date")
    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    @Basic
    @Column(name = "end_date")
    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    @Basic
    @Column(name = "description")
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ResearchEntity that = (ResearchEntity) o;

        if (active != that.active) return false;
        if (id != that.id) return false;
        if (year != that.year) return false;
        if (description != null ? !description.equals(that.description) : that.description != null) return false;
        if (endDate != null ? !endDate.equals(that.endDate) : that.endDate != null) return false;
        if (startDate != null ? !startDate.equals(that.startDate) : that.startDate != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + year;
        result = 31 * result + (active ? 1 : 0);
        result = 31 * result + (startDate != null ? startDate.hashCode() : 0);
        result = 31 * result + (endDate != null ? endDate.hashCode() : 0);
        result = 31 * result + (description != null ? description.hashCode() : 0);
        return result;
    }

    @ManyToMany
    @JoinTable(name = "research_blank", schema = "registration", catalog = "bis",
            joinColumns = @JoinColumn(name = "research_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "blank_id", referencedColumnName = "id")
    )
    public Set<BlankEntity> getBlanks() {
        return blanks;
    }

    public void setBlanks(Set<BlankEntity> blanks) {
        this.blanks = blanks;
    }
}
