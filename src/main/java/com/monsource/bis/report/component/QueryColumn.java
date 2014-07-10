package com.monsource.bis.report.component;

/**
 * Created by nasanjargal on 7/9/14.
 */
public class QueryColumn {

    public static enum Function {
        COUNT, SUM, AVG, MAX, MIN
    }

    public static enum NAME {
        NAME, NUMERIC, STRING, DATE, TIME
    }

    private String alias;
    private String columnName;
    private Function func;
    private NAME name;

    public QueryColumn(String alias, String columnName, Function func, NAME name) {
        this.alias = alias;
        this.columnName = columnName;
        this.func = func;
        this.name = name;
    }

    public String getAlias() {
        return alias;
    }

    public String getColumnName() {
        return columnName;
    }

    public Function getFunc() {
        return func;
    }

    public NAME getName() {
        return name;
    }
}
