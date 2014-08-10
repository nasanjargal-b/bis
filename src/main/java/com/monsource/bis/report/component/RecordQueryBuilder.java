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

    protected final static String SCHEMA = "bdata.";
    protected final static String FILTER = "F_";
    protected final static String RECORD = "R";
    protected final static String QUESTION = "Q_";
    protected static final String CHOICE = "C_";

    private final String TABLE;

    Report report;
    List<QueryAlias> queryAliases = new ArrayList<>();
    List<QueryColumn> queryColumns = new ArrayList<>();
    List<QueryFilter> queryFilters = new ArrayList<>();


    public RecordQueryBuilder(Report report) {
        this.report = report;
        TABLE = SCHEMA + report.getBlankId();
        initAlias();
        initColumn();
        initFilter();
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

    private void initAlias() {

        queryAliases.add(new QueryAlias("RS", "registration.research", "id", "research_id", RECORD, null, QueryAlias.Join.INNER));
        queryAliases.add(new QueryAlias("D", "public.district", "id", "district_id", RECORD, null, QueryAlias.Join.INNER));
        queryAliases.add(new QueryAlias("C", "public.city", "id", "city_id", "D", null, QueryAlias.Join.INNER));

        for (Column column : report.getColumns()) {
            if (column.getFilter() != null || column.getChoiceId() != null) {
                QueryAlias queryAlias = new QueryAlias(
                        QUESTION + column.getCode(),
                        TABLE,
                        "id",
                        "id",
                        RECORD,
                        QUESTION + column.getQuestionId(),
                        QueryAlias.Join.LEFT
                );

                if (column.getFilter() != null)
                    queryAlias.setFilter(column.getFilter());

                if (column.getChoiceId() != null) {
                    queryAlias.setFilter(QUESTION + column.getCode() + "." + QUESTION + column.getQuestionId() + " = " + column.getChoiceId());
                }
                queryAliases.add(queryAlias);
            }

            if (column.getColumnType() == QuestionType.SINGLE_CHOICE) {
                queryAliases.add(new QueryAlias(CHOICE + QUESTION + column.getCode(), "registration.choice", "id", QUESTION + column.getQuestionId(), RECORD, null, QueryAlias.Join.LEFT));
            }
        }
    }

    private void buildAlias(StringBuilder queryBuilder) {
        List<String> aliasList = new ArrayList<>();

        for (QueryAlias queryAlias : queryAliases) {
            StringBuilder aliasBuilder = new StringBuilder();

            aliasBuilder.append(queryAlias.getJoin() + " JOIN ");
            aliasBuilder.append(queryAlias.getTable() + " AS " + queryAlias.getAlias());
            aliasBuilder.append(" ON ");
            aliasBuilder.append(queryAlias.getAlias() + "." + queryAlias.getColumn());
            aliasBuilder.append(" = ");
            aliasBuilder.append(queryAlias.getRefAlias() + "." + queryAlias.getRefColumn());

            if (queryAlias.getFilter() != null) {
                String filter = queryAlias.getFilter();
                aliasBuilder.append(" AND ");
                aliasBuilder.append(filter.replace("$", queryAlias.getAlias() + "." + queryAlias.getFilterColumn()));
            }

            aliasList.add(aliasBuilder.toString());
        }


        queryBuilder.append(StringUtils.join(aliasList, " "));
    }

    private void initColumn() {
        for (Column column : report.getColumns()) {
            String alias = RECORD;
            if (column.getColumnType() == QuestionType.SINGLE_CHOICE) {
                alias = QUESTION + column.getCode();
            }
            switch (column.getType()) {
                case RESEARCH:
                    queryColumns.add(new QueryColumn("RS", "name", column.getCode(), column.getCalcType()));
                    break;
                case CITY:
                    queryColumns.add(new QueryColumn("C", "name", column.getCode(), column.getCalcType()));
                    break;
                case DISTRICT:
                    queryColumns.add(new QueryColumn("D", "name", column.getCode(), column.getCalcType()));
                    break;
                case QUESTION:
                    switch (column.getColumnType()) {
                        case MULTIPLE_CHOICE:
                        case SINGLE_CHOICE:
                            queryColumns.add(new QueryColumn(CHOICE + alias, "text", column.getCode(), column.getCalcType()));
                            break;
                        default:
                            queryColumns.add(new QueryColumn(alias, QUESTION + column.getQuestionId(), column.getCode(), column.getCalcType()));
                            break;
                    }
                    break;

            }
        }
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

    private void initFilter() {

        for (Filter filter : report.getFilters()) {
            QueryFilter queryFilter = new QueryFilter();
            switch (filter.getType()) {
                case RESEARCH:
                    queryFilter.setAlias("RS");
                    queryFilter.setColumn("id");
                    queryFilter.setResearchId(filter.getResearchId());
                    break;
                case CITY:
                    queryFilter.setAlias("C");
                    queryFilter.setColumn("id");
                    queryFilter.setCityId(filter.getCityId());
                    break;
                case DISTRICT:
                    queryFilter.setAlias("D");
                    queryFilter.setColumn("id");
                    queryFilter.setDistrictId(filter.getDistrictId());
                    break;
                case QUESTION:
                    queryFilter.setAlias(RECORD);
                    queryFilter.setColumn(QUESTION + filter.getQuestionId());
                    switch (filter.getColumnType()) {
                        case MULTIPLE_CHOICE:
                        case SINGLE_CHOICE:
                            queryFilter.setChoiceIds(filter.getChoiceIds());
                            break;
                        default:
                            queryFilter.setFilter(filter.getFilter());
                    }
            }

            queryFilters.add(queryFilter);
        }
    }

    private void buildFilter(StringBuilder queryBuilder) {
        List<String> filterList = new ArrayList<>();

        for (QueryFilter queryFilter : queryFilters) {
            String column = queryFilter.getAlias() + "." + queryFilter.getColumn();

            if (queryFilter.getFilter() != null) {
                filterList.add("(" + queryFilter.getFilter().replace("\"", "'").replace("$", column) + ")");
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

        List<String> groups = new ArrayList<>();

        for (Column column : report.getColumns()) {
            if (column.getCalcType() == ReportCalcType.GROUP) {
                groups.add("\"" + column.getCode() + "\"");
            }
        }

        if (groups.size() > 0) {
            queryBuilder.append(" GROUP BY");
            queryBuilder.append(StringUtils.join(groups, ", "));
            queryBuilder.append(" ORDER BY");
            queryBuilder.append(StringUtils.join(groups, ", "));
        }
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
}
