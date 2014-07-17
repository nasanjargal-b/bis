package com.monsource.bis.report.model;

/**
 * Created by nasanjargal on 7/15/14.
 */
public class Research {
    private Integer id;
    private String name;
    private Integer year;

    public Research() {
    }

    public Research(Integer id, String name, Integer year) {
        this.id = id;
        this.name = name;
        this.year = year;
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

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }
}
