package com.monsource.bis.report.component;

import java.util.List;

/**
 * Created by nasanjargal on 7/15/14.
 */
public class QueryFilter {

    private String alias;
    private String column;
    private String filter;
    private Integer researchId;
    private Integer cityId;
    private Integer districtId;
    private List<Integer> choiceIds;

    public String getAlias() {
        return alias;
    }

    public void setAlias(String alias) {
        this.alias = alias;
    }

    public String getColumn() {
        return column;
    }

    public void setColumn(String column) {
        this.column = column;
    }

    public String getFilter() {
        return filter;
    }

    public void setFilter(String filter) {
        this.filter = filter;
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

    public List<Integer> getChoiceIds() {
        return choiceIds;
    }

    public void setChoiceIds(List<Integer> choiceIds) {
        this.choiceIds = choiceIds;
    }
}
