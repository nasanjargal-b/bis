package com.monsource.bis.blank.component.db;

import com.monsource.bis.blank.model.QuestionType;
import com.monsource.bis.data.entity.QuestionEntity;
import org.apache.commons.lang.StringUtils;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * Created by nasanjargal on 7/22/14.
 */
public class AlterViewBuilder extends DbBuilder {

    private final static String CODE_SUFFIX = "_CODE";
    private final static String TEXT_SUFFIX = "_TEXT";

    private String column = "%s AS \"%s\"";
    private String join = "LEFT JOIN registration.choice AS %s ON %s.id = r.%s";
    private String query = "CREATE VIEW bdata.V_%s AS SELECT " +
            "r.id AS id," +
            "r.research_id AS research_id," +
            "r.district_id AS district_id," +
            "d.city_id AS city_id," +
            "rs.name AS research_name," +
            "rs.year AS research_year," +
            "d.name AS district_name," +
            "c.name AS city_name," +
            "%s" +
            "FROM bdata.%s AS r " +
            "INNER JOIN registration.research AS rs ON rs.id = r.research_id " +
            "INNER JOIN public.district AS d ON r.district_id = d.id " +
            "INNER JOIN public.city AS c ON d.city_id = c.id " +
            "%s";

    private String multiQuery = "CREATE VIEW bdata.\"V_%s_%s\" AS SELECT " +
            "rc.record_id," +
            "c.id as choice_id," +
            "c.code as choice_code," +
            "c.text as choice_text" +
            " FROM bdata.%s AS rc INNER JOIN registration.choice AS c ON rc.choice_id = c.id";

    private String name;
    private List<String> columns = new ArrayList<>();
    private List<String> joins = new ArrayList<>();
    private List<QuestionEntity> questions;
    private List<String> queries = new ArrayList<>();

    public AlterViewBuilder(String name, List<QuestionEntity> questions) {
        this.name = name;
        this.questions = questions;
        initColumns();
    }

    private void initColumns() {
        for (QuestionEntity question : questions) {
            String columnAlias = COLUMN_PREFIX + question.getId();
            if (question.getType() == QuestionType.SINGLE_CHOICE) {
                columns.add(String.format(column, columnAlias, question.getCode()));

                String alias = COLUMN_PREFIX + question.getId() + CODE_SUFFIX;
                joins.add(String.format(join, alias, alias, COLUMN_PREFIX + question.getId()));
                columns.add(String.format(column, alias + ".code", question.getCode() + CODE_SUFFIX));
                columns.add(String.format(column, alias + ".text", question.getCode() + TEXT_SUFFIX));
            } else if (question.getType() == QuestionType.MULTIPLE_CHOICE) {
                queries.add(String.format(multiQuery, name, question.getCode(), name + "_" + question.getId()));
            } else {
                columns.add(String.format(column, columnAlias, question.getCode()));
            }
        }
    }

    @Override
    public List<String> getQueries() {
        queries.add(String.format(query, name, StringUtils.join(columns, ","), name, StringUtils.join(joins, " ")));
        return queries;
    }
}
