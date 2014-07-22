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


    private String column = "%s AS \"%s\"";
    private String join = "LEFT JOIN registration.choice AS %s ON %s.id = r.%s";
    private String query = "CREATE OR REPLACE VIEW bdata.V_%s AS SELECT " +
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

    private String name;
    private List<String> columns = new ArrayList<>();
    private List<String> joins = new ArrayList<>();
    private List<QuestionEntity> questions;

    public AlterViewBuilder(String name, List<QuestionEntity> questions) {
        this.name = name;
        this.questions = questions;
        initColumns();
    }

    private void initColumns() {
        for (QuestionEntity question : questions) {
            String columnAlias = COLUMN_PREFIX + question.getId();
            /*if (question.getType() == QuestionType.MULTIPLE_CHOICE) {

            } else if (question.getType() == QuestionType.SINGLE_CHOICE) {
                String choiceAlias = "C_" + question.getCode();
                joins.add(String.format(join, choiceAlias, choiceAlias, columnAlias));
                columns.add(String.format(column, choiceAlias + ".code", question.getCode()));
            } else {
                columns.add(String.format(column, columnAlias, question.getCode()));
            }*/
            columns.add(String.format(column, columnAlias, question.getCode()));
        }
    }

    @Override
    public List<String> getQueries() {
        return Arrays.asList(String.format(query, name, StringUtils.join(columns, ","), name, StringUtils.join(joins, " ")));
    }
}
