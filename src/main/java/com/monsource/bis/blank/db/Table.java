package com.monsource.bis.blank.db;

import java.util.*;

import com.monsource.bis.blank.db.Table.*;

public class Table {

    private List<Column> columns;
    private String name;
    private String schema;
    private Status status;
    List<Table> tables;

    public List<Column> getColumns() {
        return this.columns;
    }

    public void setColumns(List<Column> columns) {
        this.columns = columns;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSchema() {
        return this.schema;
    }

    public void setSchema(String schema) {
        this.schema = schema;
    }

    public Status getStatus() {
        return this.status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public List<Table> getTables() {
        return this.tables;
    }

    public void setTables(List<Table> tables) {
        this.tables = tables;
    }

    public String getFullName() {
        return schema + "." + name;
    }

    public enum Status {
        CREATE, MODIFY
    }
}