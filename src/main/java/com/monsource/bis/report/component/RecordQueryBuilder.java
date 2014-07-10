package com.monsource.bis.report.component;

import com.monsource.bis.data.entity.ReportEntity;
import com.monsource.bis.data.entity.ReportQuestionEntity;
import com.monsource.bis.data.entity.type.ReportQuestionType;
import org.apache.commons.lang.StringUtils;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by nasanjargal on 7/8/14.
 */

public class RecordQueryBuilder {

    protected final static String RQ = "RQ_";
    protected final static String Q = "Q_";

    private final static String TABLE = "registration.record";

    ReportEntity report;
    List<QueryColumn> columns = new ArrayList<>();
    List<QueryJoin> joins = new ArrayList<>();

    public RecordQueryBuilder(ReportEntity report) {
        this.report = report;
        initColumn();
        initJoin();
    }

    private void initColumn() {

        /*for (ReportQuestionEntity column : report.getReportQuestions()) {
            switch (column.getType()) {
                case RESEARCH:
                    columns.add(new QueryColumn("rs", "research", null, QueryColumn.NAME.NAME));
                    break;
                case CITY:
                    columns.add(new QueryColumn("c", "city", null, QueryColumn.NAME.NAME));
                    break;
                case DISTRICT:
                    columns.add(new QueryColumn("d", "district", null, QueryColumn.NAME.NAME));
                    break;
                default:
                    QueryColumn.NAME name;
                    switch (column.getQuestion().getType()) {
                        case TEXT:
                            name = QueryColumn.NAME.STRING;
                            break;
                        case DATE:
                            name = QueryColumn.NAME.DATE;
                            break;
                        case TIME:
                            name = QueryColumn.NAME.TIME;
                            break;
                        default:
                            name = QueryColumn.NAME.NUMERIC;
                            break;
                    }
                    QueryColumn.Function func = null;
                    switch (column.getType()) {
                        case SUM:
                            func = QueryColumn.Function.SUM;
                            break;
                        case AVG:
                            func = QueryColumn.Function.AVG;
                            break;
                        case COUNT:
                            func = QueryColumn.Function.COUNT;
                            break;
                        case MAX:
                            func = QueryColumn.Function.MAX;
                            break;
                        case MIN:
                            func = QueryColumn.Function.MIN;
                            break;
                    }
                    columns.add(new QueryColumn(column.getCode(), column.getCode(), func, name));
                    break;
            }
        }*/

    }

    private void initJoin() {
        for (ReportQuestionEntity column : report.getReportQuestions()) {
            if (column.getType() != ReportQuestionType.RESEARCH && column.getType() != ReportQuestionType.CITY && column.getType() != ReportQuestionType.DISTRICT)
                joins.add(new QueryJoin(column.getCode(), "record_question", "registration", column.getQuestion().getId(), QueryJoin.Join.LEFT));
        }
    }


    public String query() {
        return "" +
                "SELECT " + getColumns() + " FROM " + TABLE + " AS r " +
                "INNER JOIN registration.research AS rs ON rs.id = r.research_id " +
                "INNER JOIN registration.blank AS b ON b.id = r.blank_id " +
                "INNER JOIN public.district AS d ON d.id = r.district_id " +
                "INNER JOIN public.city AS c ON c.id = d.city_id " +
                "" + getJoins() + " " +
                "" + getGroups();
    }

    private String getGroups() {
        List<String> groupList = new ArrayList<>();

        for (ReportQuestionEntity column : report.getReportQuestions()) {
                switch (column.getType()) {
                    case RESEARCH:
                        groupList.add("rs.id");
                        break;
                    case CITY:
                        groupList.add("c.id");
                        break;
                    case DISTRICT:
                        groupList.add("d.id");
                        break;
                    default:
                        groupList.add(column.getCode() + "." + column.getCode());
                        break;
                }
        }

        return "GROUP BY " + StringUtils.join(groupList, ", ");
    }

    private String getJoins() {
        StringBuilder joinBuilder = new StringBuilder();

        for (QueryJoin join : joins) {
            joinBuilder.append(join.getJoin() + " JOIN ");
            joinBuilder.append(join.getSchema());
            joinBuilder.append(".");
            joinBuilder.append(join.getName());
            joinBuilder.append(" AS ");
            joinBuilder.append(join.getAlias());
            joinBuilder.append(" ON ");
            joinBuilder.append("r.id = ");
            joinBuilder.append(join.getAlias() + ".record_id ");
            joinBuilder.append(" AND ");
            joinBuilder.append(join.getAlias() + ".question_id = " + join.getQuestionId());
            joinBuilder.append(" ");
        }

        return joinBuilder.toString();
    }

    private String getColumns() {
        List<String> columnList = new ArrayList<>();
        for (QueryColumn column : columns) {
            StringBuilder columnBuilder = new StringBuilder();
            columnBuilder.append(getFuncName(column.getFunc()));
            columnBuilder.append(column.getAlias());
            columnBuilder.append(".");
            columnBuilder.append(column.getName());
            if (column.getFunc() != null) columnBuilder.append(")");
            columnBuilder.append(" AS ");
            columnBuilder.append(column.getColumnName());
            columnList.add(columnBuilder.toString());
        }

        return StringUtils.join(columnList, ", ");
    }

    private String getFuncName(QueryColumn.Function func) {
        if (func != null)
            switch (func) {
                case AVG:
                    return "avg(";
                case COUNT:
                    return "count(";
                case SUM:
                    return "sum(";
                case MAX:
                    return "max(";
                case MIN:
                    return "min(";
            }

        return "";
    }
}
