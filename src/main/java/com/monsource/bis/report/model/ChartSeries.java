package com.monsource.bis.report.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.monsource.bis.data.entity.type.ChartSeriesType;

/**
 * Created by nasanjargal on 7/16/14.
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class ChartSeries {
    private Integer id;
    private String field;
    private ChartSeriesType type;

    public ChartSeries() {
    }

    public ChartSeries(Integer id, String field, ChartSeriesType type) {
        this.id = id;
        this.field = field;
        this.type = type;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getField() {
        return field;
    }

    public void setField(String field) {
        this.field = field;
    }

    public ChartSeriesType getType() {
        return type;
    }

    public void setType(ChartSeriesType type) {
        this.type = type;
    }
}
