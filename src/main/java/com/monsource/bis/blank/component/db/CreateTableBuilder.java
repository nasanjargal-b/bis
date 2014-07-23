package com.monsource.bis.blank.component.db;

import com.monsource.bis.blank.model.QuestionType;
import com.monsource.bis.data.entity.QuestionEntity;
import org.apache.commons.lang.StringUtils;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by nasanjargal on 7/22/14.
 */
public class CreateTableBuilder extends DbBuilder {

    private String createQuery = "CREATE TABLE %s (%s);";
    private String foreignQuery = "CREATE TABLE %s(record_id int4 references %s(id),choice_id int4 references registration.choice(id),primary key(record_id,choice_id))";

    private String name;
    private List<QuestionEntity> questions;
    private List<String> columns = new ArrayList<>();
    private List<String> foreignQueries = new ArrayList<>();

    public CreateTableBuilder(String name, List<QuestionEntity> questions) {
        this.name = name;
        this.questions = questions;
        buildColumns();
    }

    private void buildColumns() {
        columns.add("id serial primary key");
        columns.add("research_id int4 not null");
        columns.add("account_id int4 NOT NULL");
        columns.add("district_id int4 NOT NULL");

        for (QuestionEntity question : questions) {
            if (question.getType() != QuestionType.MULTIPLE_CHOICE) {
                String column = COLUMN_PREFIX + question.getId() + " " + getColumnType(question.getType());

                if (question.getType() == QuestionType.SINGLE_CHOICE)
                    column += " references registration.choice(id)";

                columns.add(column);
            } else {
                String foreignTableName = SCHEMA + "." + name + "_" + question.getId();
                foreignQueries.add(String.format(foreignQuery, foreignTableName, SCHEMA + "." + name));
            }
        }
    }

    @Override
    public List<String> getQueries() {
        List<String> queries = new ArrayList<>();
        queries.add(String.format(createQuery, SCHEMA + "." + name, StringUtils.join(columns, ", ")));
        queries.addAll(foreignQueries);
        return queries;
    }

}