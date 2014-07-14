package com.monsource.bis.report.component;

import com.monsource.bis.data.entity.type.ReportCalcType;

/**
 * Created by nasanjargal on 7/9/14.
 */
public class QueryColumn {

    public static enum NAME {
        NAME, NUMERIC, STRING, DATE, TIME, TEXT
    }

    private String alias;
    private String columnName;
    private ReportCalcType calc;
    private Integer questionId;
    private Integer choiceId;
    private boolean question;
    private String filter;
    private NAME name;

    public QueryColumn(String alias, String columnName, ReportCalcType calc, Integer questionId, Integer choiceId, boolean question, String filter, NAME name) {
        this.alias = alias;
        this.columnName = columnName;
        this.calc = calc;
        this.questionId = questionId;
        this.choiceId = choiceId;
        this.question = question;
        this.filter = filter;
        this.name = name;
    }

    public String getAlias() {
        return alias;
    }

    public String getColumnName() {
        return columnName;
    }

    public ReportCalcType getCalc() {
        return calc;
    }

    public boolean isQuestion() {
        return question;
    }

    public Integer getQuestionId() {
        return questionId;
    }

    public String getFilter() {
        return filter;
    }

    public NAME getName() {
        return name;
    }

    public Integer getChoiceId() {
        return choiceId;
    }
}
