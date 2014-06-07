package com.monsource.bis.core.json;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.io.Serializable;
import java.util.Collection;

public class JsonData implements Serializable {

    private boolean success;
    private Object data;
    private String message;
    private Integer total;

    @JsonIgnore
    private String[] ignores;

    /*
    *
    * */
    public JsonData() {
        success = true;
    }

    /**
     * @param success
     */
    public JsonData(boolean success) {
        this.success = success;
    }

    /**
     * @param data
     * @param ignores
     */
    public JsonData(Object data, String... ignores) {
        this.success = true;
        this.data = data;
        this.ignores = ignores;
    }

    /**
     * @param data
     * @param ignores
     */
    public JsonData(Collection data, Integer total, String... ignores) {
        this.success = true;
        this.data = data;
        this.ignores = ignores;
        this.total = total;
    }

    /**
     * @param success
     * @param message
     */
    public JsonData(boolean success, String message) {
        this.success = success;
        this.message = message;
    }

    /**
     * @param data
     */
    public JsonData(Object data) {
        this.success = true;
        this.data = data;
    }

    public void setIgnores(String... ignores) {
        this.ignores = ignores;
    }

    public String[] getIgnores() {
        return ignores;
    }

    public boolean isSuccess() {
        return this.success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public Object getData() {
        return this.data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    public String getMessage() {
        return this.message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Integer getTotal() {
        return total;
    }

    public void setTotal(Integer total) {
        this.total = total;
    }
}