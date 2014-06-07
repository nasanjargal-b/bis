package com.monsource.bis.blank.model;

import java.util.Date;
import java.util.Map;

public class Record {

    private Integer id;
    private Integer accountId;
    private Integer researchId;
    private Integer cityId;
    private Integer districtId;
    private String description;
    private Date createDate;
    private String fillWorker;
    private String fillPosition;
    private String fillPhone;
    private Date fillDate;
    private String researcher;
    private Map<String, Object> data;

    public Record() {
    }

    public Record(Integer id, Integer accountId, Integer researchId, Integer cityId, Integer districtId, String description, Date createDate, String fillWorker, String fillPosition, String fillPhone, Date fillDate, String researcher) {
        this.id = id;
        this.accountId = accountId;
        this.researchId = researchId;
        this.cityId = cityId;
        this.districtId = districtId;
        this.description = description;
        this.createDate = createDate;
        this.fillWorker = fillWorker;
        this.fillPosition = fillPosition;
        this.fillPhone = fillPhone;
        this.fillDate = fillDate;
        this.researcher = researcher;
    }

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getAccountId() {
        return this.accountId;
    }

    public void setAccountId(Integer accountId) {
        this.accountId = accountId;
    }

    public Integer getResearchId() {
        return this.researchId;
    }

    public void setResearchId(Integer researchId) {
        this.researchId = researchId;
    }

    public Integer getCityId() {
        return this.cityId;
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

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getCreateDate() {
        return this.createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public String getFillWorker() {
        return this.fillWorker;
    }

    public void setFillWorker(String fillWorker) {
        this.fillWorker = fillWorker;
    }

    public String getFillPosition() {
        return this.fillPosition;
    }

    public void setFillPosition(String fillPosition) {
        this.fillPosition = fillPosition;
    }

    public String getFillPhone() {
        return this.fillPhone;
    }

    public void setFillPhone(String fillPhone) {
        this.fillPhone = fillPhone;
    }

    public Date getFillDate() {
        return this.fillDate;
    }

    public void setFillDate(Date fillDate) {
        this.fillDate = fillDate;
    }

    public String getResearcher() {
        return this.researcher;
    }

    public void setResearcher(String researcher) {
        this.researcher = researcher;
    }

    public Map<String, Object> getData() {
        return this.data;
    }

    public void setData(Map<String, Object> data) {
        this.data = data;
    }

}