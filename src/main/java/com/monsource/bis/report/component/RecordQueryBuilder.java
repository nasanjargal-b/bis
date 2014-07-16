package com.monsource.bis.report.component;

import com.monsource.bis.blank.model.QuestionType;
import com.monsource.bis.data.entity.type.ReportCalcType;
import com.monsource.bis.data.entity.type.ReportQuestionType;
import com.monsource.bis.report.model.Column;
import com.monsource.bis.report.model.Filter;
import com.monsource.bis.report.model.Report;
import org.apache.commons.lang.StringUtils;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by nasanjargal on 7/8/14.
 */

public class RecordQueryBuilder {

    protected final static String RCV = "RCV_";
    protected final static String FILTER = "F_";
    protected final static String RECORD = "R";
    protected final static String QUESTION = "Q_";
    protected static final String QCOLUMN = "question_id";

    private final static String TABLE = "registration.record_view";

    Report report;
    List<QueryAlias> queryAliases = new ArrayList<>();
    List<QueryColumn> queryColumns = new ArrayList<>();
    List<QueryFilter> queryFilters = new ArrayList<>();

    public RecordQueryBuilder(Report report) {
        this.report = report;
        initAlias();
        initColumn();
        initFilter();
    }

    private void initAlias() {
        for (Column column : report.getColumns()) {
            if (column.getType() == ReportQuestionType.QUESTION) {
                QueryAlias queryAlias = new QueryAlias(
                        QUESTION + column.getCode(),
                        "record_question_view",
                        "registration",
                        "record_id",
                        "id",
                        RECORD,
                        column.getQuestionId(),
                        getColumnName(column.getColumnType()),
                        QueryAlias.Join.LEFT);
                if (column.getFilter() != null)
                    queryAlias.setFilter(column.getFilter());
                if (column.getChoiceId() != null) {
                    queryAlias.setFilter(QUESTION + column.getCode() + ".choice_id = " + column.getChoiceId());
                }

                queryAliases.add(queryAlias);
            }
        }

        for (Filter filter : report.getFilters()) {

            boolean notHave = true;
            for (QueryAlias queryAliase : queryAliases) {
                if (queryAliase.getAlias().equals(FILTER + filter.getCode())) {
                    notHave = false;
                    break;
                }
            }
            if (!notHave) continue;

            if (filter.getType() == ReportQuestionType.QUESTION) {
                QueryAlias queryAlias = new QueryAlias(
                        FILTER + filter.getCode(),
                        "record_question_view",
                        "registration",
                        "record_id",
                        "id",
                        RECORD,
                        filter.getQuestionId(),
                        getColumnName(filter.getColumnType()),
                        QueryAlias.Join.INNER);

                queryAliases.add(queryAlias);
            }
        }
    }

    private void initFilter() {
        for (Filter filter : report.getFilters()) {
            QueryFilter queryFilter = new QueryFilter();
            switch (filter.getType()) {
                case RESEARCH:
                    queryFilter.setAlias(RECORD);
                    queryFilter.setColumn("research_id");
                    queryFilter.setResearchId(filter.getResearchId());
                    break;
                case CITY:
                    queryFilter.setAlias(RECORD);
                    queryFilter.setColumn("city_id");
                    queryFilter.setCityId(filter.getCityId());
                    break;
                case DISTRICT:
                    queryFilter.setAlias(RECORD);
                    queryFilter.setColumn("district_id");
                    queryFilter.setDistrictId(filter.getDistrictId());
                    break;
                case QUESTION:
                    queryFilter.setAlias(FILTER + filter.getCode());
                    switch (filter.getColumnType()) {
                        case MULTIPLE_CHOICE:
                        case SINGLE_CHOICE:
                            queryFilter.setColumn("choice_id");
                            queryFilter.setChoiceIds(filter.getChoiceIds());
                            break;
                        default:
                            queryFilter.setColumn(getColumnName(filter.getColumnType()));
                            queryFilter.setFilter(filter.getFilter());
                    }
            }

            queryFilters.add(queryFilter);
        }
    }

    private void initColumn() {
        for (Column column : report.getColumns()) {
            switch (column.getType()) {
                case RESEARCH:
                    queryColumns.add(new QueryColumn(RECORD, "research_name", column.getCode(), column.getCalcType()));
                    break;
                case CITY:
                    queryColumns.add(new QueryColumn(RECORD, "city_name", column.getCode(), column.getCalcType()));
                    break;
                case DISTRICT:
                    queryColumns.add(new QueryColumn(RECORD, "district_name", column.getCode(), column.getCalcType()));
                    break;
                case QUESTION:
                    switch (column.getColumnType()) {
                        case MULTIPLE_CHOICE:
                        case SINGLE_CHOICE:
                            queryColumns.add(new QueryColumn(QUESTION + column.getCode(), "choice_text", column.getCode(), column.getCalcType()));
                            break;
                        default:
                            queryColumns.add(new QueryColumn(QUESTION + column.getCode(), getColumnName(column.getColumnType()), column.getCode(), column.getCalcType()));
                            break;
                    }
                    break;

            }
        }
    }

    public String query() {

        StringBuilder queryBuilder = new StringBuilder("SELECT ");
        buildColumn(queryBuilder);
        queryBuilder.append(" FROM " + TABLE + " AS " + RECORD + " ");
        buildAlias(queryBuilder);
        buildFilter(queryBuilder);
        buildGroup(queryBuilder);

        return queryBuilder.toString();
    }

    private void buildFilter(StringBuilder queryBuilder) {
        List<String> filterList = new ArrayList<>();

        for (QueryFilter queryFilter : queryFilters) {
            String column = queryFilter.getAlias() + "." + queryFilter.getColumn();

            if (queryFilter.getFilter() != null) {
                filterList.add("(" + queryFilter.getFilter().replace("$", column) + ")");
            } else if (queryFilter.getResearchId() != null) {
                filterList.add(column + " = " + queryFilter.getResearchId());
            } else if (queryFilter.getCityId() != null) {
                filterList.add(column + " = " + queryFilter.getCityId());
            } else if (queryFilter.getDistrictId() != null) {
                filterList.add(column + " = " + queryFilter.getDistrictId());
            } else if (queryFilter.getChoiceIds() != null) {
                filterList.add(column + " IN (" + StringUtils.join(queryFilter.getChoiceIds(), ",") + ")");
            }
        }

        if (filterList.size() > 0)
            queryBuilder.append(" WHERE " + StringUtils.join(filterList, " AND "));
    }

    private void buildGroup(StringBuilder queryBuilder) {
        List<String> groupList = new ArrayList<>();

        for (QueryColumn queryColumn : queryColumns) {
            if (queryColumn.getCalc() == ReportCalcType.GROUP) {
                groupList.add("\"" + queryColumn.getName() + "\"");
            }
        }
        if (groupList.size() > 0)
            queryBuilder.append(" GROUP BY " + StringUtils.join(groupList, ", "));
    }

    private void buildColumn(StringBuilder queryBuilder) {
        List<String> columnList = new ArrayList<>();

        for (QueryColumn queryColumn : queryColumns) {
            StringBuilder columnBuilder = new StringBuilder();

            columnBuilder.append(String.format(getCalc(queryColumn.getCalc()), queryColumn.getAlias() + "." + queryColumn.getColumn()));
            columnBuilder.append(" AS ");
            columnBuilder.append("\"" + queryColumn.getName() + "\"");

            columnList.add(columnBuilder.toString());
        }

        queryBuilder.append(StringUtils.join(columnList, ", "));
    }

    private void buildAlias(StringBuilder queryBuilder) {
        List<String> aliasList = new ArrayList<>();

        for (QueryAlias queryAlias : queryAliases) {
            StringBuilder aliasBuilder = new StringBuilder();

            aliasBuilder.append(queryAlias.getJoin() + " JOIN ");
            aliasBuilder.append(queryAlias.getSchema() + "." + queryAlias.getTable() + " AS " + queryAlias.getAlias());
            aliasBuilder.append(" ON ");
            aliasBuilder.append(queryAlias.getAlias() + "." + queryAlias.getColumn());
            aliasBuilder.append(" = ");
            aliasBuilder.append(queryAlias.getRefAlias() + "." + queryAlias.getRefColumn());

            if (queryAlias.getQuestionId() != null) {
                aliasBuilder.append(" AND ");
                aliasBuilder.append(queryAlias.getAlias() + "." + QCOLUMN + " = " + queryAlias.getQuestionId());
            }

            if (queryAlias.getFilter() != null) {
                String filter = queryAlias.getFilter();
                aliasBuilder.append(" AND ");
                aliasBuilder.append(filter.replace("$", queryAlias.getAlias() + "." + queryAlias.getFilterColumn()));
            }

            aliasList.add(aliasBuilder.toString());
        }


        queryBuilder.append(StringUtils.join(aliasList, " "));
    }

    private String getCalc(ReportCalcType calc) {
        switch (calc) {
            case AVG:
                return "avg(%s)";
            case COUNT:
                return "count(%s)";
            case SUM:
                return "sum(%s)";
            case MAX:
                return "max(%s)";
            case MIN:
                return "min(%s)";
            default:
                return "%s";
        }
    }

    private String getColumnName(QuestionType columnType) {
        switch (columnType) {
            case SINGLE_CHOICE:
            case MULTIPLE_CHOICE:
                return "text";
            case TIME:
                return "time";
            case NUMERIC:
                return "numeric";
            case DATE:
                return "date";
            case TEXT:
                return "string";
        }
        return null;
    }
}
