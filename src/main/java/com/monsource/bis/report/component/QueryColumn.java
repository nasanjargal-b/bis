package com.monsource.bis.report.component;

import com.monsource.bis.data.entity.type.ReportCalcType;

/**
 * Created by nasanjargal on 7/9/14.
 */
public class QueryColumn {

    private String alias;
    private String column;
    private String name;
    private ReportCalcType calc;

    public QueryColumn(String alias, String column, String name, ReportCalcType calc) {
        this.alias = alias;
        this.column = column;
        this.name = name;
        this.calc = calc;
    }

    public String getAlias() {
        return alias;
    }

    public String getColumn() {
        return column;
    }

    public String getName() {
        return name;
    }

    public ReportCalcType getCalc() {
        return calc;
    }
}
