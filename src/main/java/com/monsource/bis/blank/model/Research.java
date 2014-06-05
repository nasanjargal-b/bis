package com.monsource.bis.blank.model;

import java.util.Date;
import java.util.List;

/**
 * Created by nyamaa on 6/4/14.
 */
public class Research {
    private Integer id;
    private Integer year;
    private Boolean active;
    private Date startDate;
    private Date endDate;
    private String description;
    private List<Blanks> blanks;

    public List<Blanks> getBlanks() {
        return blanks;
    }

    public void setBlanks(List<Blanks> blanks) {
        this.blanks = blanks;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
