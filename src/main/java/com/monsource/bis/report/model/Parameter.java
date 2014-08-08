package com.monsource.bis.report.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.monsource.bis.data.entity.type.ReportParameterType;

/**
 * Created by nasanjargal on 8/7/14.
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class Parameter {
    private Integer id;
    private String code;
    private ReportParameterType type;
    private Boolean prompt;
    private String query;
    private Integer researchId;
    private Integer cityId;
    private Integer districtId;

    public Parameter() {
    }

    public Parameter(Integer id, String code, ReportParameterType type, Boolean prompt, String query, Integer researchId, Integer cityId, Integer districtId) {
        this.id = id;
        this.code = code;
        this.type = type;
        this.prompt = prompt;
        this.query = query;
        this.researchId = researchId;
        this.cityId = cityId;
        this.districtId = districtId;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public ReportParameterType getType() {
        return type;
    }

    public void setType(ReportParameterType type) {
        this.type = type;
    }

    public Boolean getPrompt() {
        return prompt;
    }

    public void setPrompt(Boolean prompt) {
        this.prompt = prompt;
    }

    public String getQuery() {
        return query;
    }

    public void setQuery(String query) {
        this.query = query;
    }

    public Integer getResearchId() {
        return researchId;
    }

    public void setResearchId(Integer researchId) {
        this.researchId = researchId;
    }

    public Integer getCityId() {
        return cityId;
    }

    public void setCityId(Integer cityId) {
        this.cityId = cityId;
    }

    public Integer getDistrictId() {
        return districtId;
    }

    public void setDistrictId(Integer districtId) {
        this.districtId = districtId;
    }
}
