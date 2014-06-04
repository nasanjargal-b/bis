package com.monsource.bis.blank.db;

public class Column {

    private String name;
    private String type;
    private boolean base = false;
    private String foreignColumn;
    private String foreignTable;
    private boolean notNull = false;

    public Column() {
    }

    public Column(String name, String type) {
        this.name = name;
        this.type = type;
    }

    public Column(String name, String type, boolean base) {
        this.name = name;
        this.type = type;
        this.base = base;
    }

    public Column(String name, String type, boolean base, boolean notNull) {
        this.name = name;
        this.type = type;
        this.base = base;
        this.notNull = notNull;
    }

    public Column(String name, String type, boolean base, boolean notNull, String foreignColumn, String foreignTable) {
        this.name = name;
        this.type = type;
        this.base = base;
        this.foreignColumn = foreignColumn;
        this.foreignTable = foreignTable;
        this.notNull = notNull;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return this.type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public boolean isBase() {
        return this.base;
    }

    public void setBase(boolean base) {
        this.base = base;
    }

    public String getForeignColumn() {
        return this.foreignColumn;
    }

    public void setForeignColumn(String foreignColumn) {
        this.foreignColumn = foreignColumn;
    }

    public String getForeignTable() {
        return this.foreignTable;
    }

    public void setForeignTable(String foreignTable) {
        this.foreignTable = foreignTable;
    }

    public boolean isNotNull() {
        return this.notNull;
    }

    public void setNotNull(boolean notNull) {
        this.notNull = notNull;
    }

}