package com.monsource.bis.report.model;

import com.monsource.bis.core.model.Model;

import java.util.List;

public class ParamView implements Model<Integer> {

    private Param param;
    private List<Object[]> data;

    public List<Object[]> getData() {
        return this.data;
    }

    public void setData(List<Object[]> data) {
        this.data = data;
    }

    public Param getParam() {
        return param;
    }

    public void setParam(Param param) {
        this.param = param;
    }

    @Override
    public Integer getId() {
        return param.getId();
    }
}