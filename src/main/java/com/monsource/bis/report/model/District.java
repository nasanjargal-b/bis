package com.monsource.bis.report.model;

/**
 * Created by nasanjargal on 7/15/14.
 */
public class District {
    private Integer id;
    private String cityName;
    private String name;

    public District() {
    }

    public District(Integer id, String cityName, String name) {
        this.id = id;
        this.cityName = cityName;
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCityName() {
        return cityName;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
