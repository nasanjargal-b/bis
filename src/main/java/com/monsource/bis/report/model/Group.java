package com.monsource.bis.report.model;

import com.monsource.bis.core.model.Model;

import java.util.List;

/**
 * Created by nasanjargal on 6/15/14.
 */
public class Group implements Model<Integer> {

    private Integer id;
    private String name;
    private Integer parentId;
    private boolean expanded = true;

    public Group() {
    }

    public Group(Integer id, String name, Integer parentId) {
        this.id = id;
        this.name = name;
        this.parentId = parentId;
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

    public boolean isExpanded() {
        return expanded;
    }

    public Integer getParentId() {
        return parentId;
    }

    public void setParentId(Integer parentId) {
        this.parentId = parentId;
    }
}
