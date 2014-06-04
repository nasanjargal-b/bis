package com.monsource.bis.account.model;

/**
 * Created by nyamaa on 6/3/14.
 */
public class District {
    private Integer id;
    private Integer cityId;
    private String name;

    public Integer getCityId() {
        return cityId;
    }

    public void setCityId(Integer cityId) {
        this.cityId = cityId;
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
}
