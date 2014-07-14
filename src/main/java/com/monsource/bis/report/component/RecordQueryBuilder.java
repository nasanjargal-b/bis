package com.monsource.bis.report.component;

import com.monsource.bis.data.entity.ReportEntity;
import com.monsource.bis.data.entity.ReportQuestionEntity;
import com.monsource.bis.data.entity.type.ReportCalcType;
import com.monsource.bis.data.entity.type.ReportQuestionType;
import org.apache.commons.lang.StringUtils;
import org.hibernate.ejb.criteria.expression.function.AggregationFunction;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by nasanjargal on 7/8/14.
 */

public class RecordQueryBuilder {

    protected final static String RCV = "RCV_";

    private final static String TABLE = "registration.record";

    ReportEntity report;
    List<QueryColumn> columns = new ArrayList<>();

    public RecordQueryBuilder(ReportEntity report) {
        this.report = report;
        initColumn();
    }

    private void initColumn() {

        for (ReportQuestionEntity column : report.getReportQuestions()) {
            switch (column.getType()) {
                case RESEARCH:
                    columns.add(new QueryColumn("rs", "research", column.getCalcType(), null, null, false, null, QueryColumn.NAME.NAME));
                    break;
                case CITY:
                    columns.add(new QueryColumn("c", "city", column.getCalcType(), null, null, false, null, QueryColumn.NAME.NAME));
                    break;
                case DISTRICT:
                    columns.add(new QueryColumn("d", "district", column.getCalcType(), null, null, false, null, QueryColumn.NAME.NAME));
                    break;
                case QUESTION:
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
                        case SINGLE_CHOICE:
                        case MULTIPLE_CHOICE:
                            name = QueryColumn.NAME.TEXT;
                            break;
                        default:
                            name = QueryColumn.NAME.NUMERIC;
                            break;
                    }
                    QueryColumn queryColumn = new QueryColumn(column.getCode(), column.getCode(), column.getCalcType(), column.getQuestion().getId(), (column.getChoice() == null) ? null : column.getChoice().getId(), true, column.getFilter(), name);
                    columns.add(queryColumn);
                    break;
            }
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

        for (QueryColumn column : columns) {
            if (column.getCalc() == ReportCalcType.GROUP) {
                groupList.add(column.getColumnName());
            }
        }

        if (groupList.size() == 0)
            return "";

        return "GROUP BY " + StringUtils.join(groupList, ", ");
    }

    private String getJoins() {

        List<String> joins = new ArrayList<>();

        for (QueryColumn column : columns) {
            if (column.getQuestionId() == null) continue;

            StringBuilder joinBuilder = new StringBuilder();

            joinBuilder.append("LEFT JOIN registration.record_question AS ");
            joinBuilder.append(column.getAlias());
            joinBuilder.append(" ON ");
            joinBuilder.append("r.id = " + column.getAlias() + ".record_id");
            joinBuilder.append(" AND ");
            joinBuilder.append(column.getAlias() + ".question_id = " + column.getQuestionId());

            if (column.getFilter() != null) {
                joinBuilder.append(" AND ");
                joinBuilder.append(column.getFilter().replace("$", column.getAlias() + "." + column.getName()));
            }

            if (column.getName() == QueryColumn.NAME.TEXT) {
                joinBuilder.append(" LEFT JOIN registration.record_choice_view AS ");
                joinBuilder.append(RCV + column.getAlias());
                joinBuilder.append(" ON ");
                joinBuilder.append(column.getAlias() + ".id = " + RCV + column.getAlias() + ".record_question_id");

                if (column.getChoiceId() != null) {
                    joinBuilder.append(" AND ");
                    joinBuilder.append(RCV + column.getAlias() + ".choice_id = " + column.getChoiceId());
                }
            }


            joins.add(joinBuilder.toString());

        }

        return StringUtils.join(joins, " ");
    }

    private String getColumns() {
        List<String> columnList = new ArrayList<>();
        for (QueryColumn column : columns) {
            String calc = getCalc(column.getCalc());

            StringBuilder columnBuilder = new StringBuilder();
            columnBuilder.append(calc);
            columnBuilder.append((column.getName() == QueryColumn.NAME.TEXT) ? RCV + column.getAlias() : column.getAlias());
            columnBuilder.append(".");
            columnBuilder.append(column.getName());
            if (!calc.equals("")) columnBuilder.append(")");
            columnBuilder.append(" AS ");
            columnBuilder.append(column.getColumnName());
            columnList.add(columnBuilder.toString());
        }

        return StringUtils.join(columnList, ", ");
    }

    private String getCalc(ReportCalcType calc) {
        switch (calc) {
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
            default:
                return "";
        }
    }
}
