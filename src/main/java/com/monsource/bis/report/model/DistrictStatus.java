package com.monsource.bis.report.model;

/**
 * Created by nasanjargal on 8/18/14.
 */
public class DistrictStatus {
    public static enum Status {
        C, A, D
    }

    public Status status;
    public Integer id;

    public DistrictStatus() {
    }

    public DistrictStatus(Status status, Integer id) {
        this.status = status;
        this.id = id;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}
