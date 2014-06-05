package com.monsource.bis.blank.service;

import org.hibernate.SQLQuery;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.monsource.bis.blank.model.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.monsource.bis.blank.db.*;

public class QuestionService {

    @Autowired
    SessionFactory sessionFactory;

    private String schema;

    public String getSchema() {
        return this.schema;
    }

    public void setSchema(String schema) {
        this.schema = schema;
    }

    /**
     * @param blank
     */
    public void dropBlankTable(Blank blank) {
        Table table = createTable(blank);
        QueryBuilder queryBuilder = new QueryBuilder(table, sessionFactory.getCurrentSession());
        queryBuilder.drop();
    }

    /**
     * @param blank
     */
    public void saveBlankTable(Blank blank) {
        Table table = createTable(blank);
        QueryBuilder queryBuilder = new QueryBuilder(table, sessionFactory.getCurrentSession());
        queryBuilder.execute();
    }

    /**
     * @param blank
     */
    private Table createTable(Blank blank) {
        Table table = new Table();

        table.setName(blank.getId());
        table.setSchema(schema);
        table.setColumns(getBaseColumn());
        table.setTables(new ArrayList<Table>());

        List<Question> questions = this.getColumnsWithoutGroup(blank.getQuestions());

        for (Question question : questions) {
            if (question.getType() != ColumnType.MULTIPLE_CHOICE && question.getType() != ColumnType.SINGLE_CHOICE) {
                table.getColumns().add(new Column(question.getId(), ColumnTypeHelper.getSqlType(question.getType())));
            } else {
                Table subTable = new Table();
                subTable.setName(blank.getId() + question.getId());
                subTable.setSchema(schema);
                subTable.setColumns(Arrays.asList(new Column[]{
                        new Column("id", "SERIAL", true, true),
                        new Column("value", "text", true, true),
                        new Column("ref_id", "integer", true, true, "id", table.getFullName())
                }));
                table.getTables().add(subTable);
            }
        }

        return table;
    }

    public List<Question> getColumnsWithoutGroup(List<Question> questions) {
        List<Question> questionList = new ArrayList<>();
        for (Question question : questions) {
            if (!question.isGroup()) {
                questionList.add(question);
            } else {
                questionList.addAll(getColumnsWithoutGroup(question.getChildren()));
            }
        }

        return questionList;
    }

    private List<Column> getBaseColumn() {
        ArrayList<Column> columns = new ArrayList<>();

        columns.add(new Column("id", "SERIAL", true, true));
        columns.add(new Column("account_id", "integer", true, true, "id", "public.account"));
        columns.add(new Column("research_id", "integer", true, true, "id", "registration.research"));
        columns.add(new Column("city_id", "integer", true, true, "id", "public.city"));
        columns.add(new Column("district_id", "integer", true, false, "id", "public.district"));
        columns.add(new Column("description", "text", true));
        columns.add(new Column("created_date", "timestamp", true, true));
        columns.add(new Column("fill_worker", "varchar(128)", true));
        columns.add(new Column("fill_position", "varchar(128)", true));
        columns.add(new Column("fill_phone", "varchar(128)", true));
        columns.add(new Column("fill_date", "date", true));
        columns.add(new Column("researcher", "varchar(128)", true));

        return columns;
    }

}