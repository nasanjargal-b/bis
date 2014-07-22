package com.monsource.bis.blank.component.db;

import com.monsource.bis.blank.model.QuestionType;
import com.monsource.bis.data.entity.ColumnViewEntity;
import com.monsource.bis.data.entity.QuestionEntity;
import com.monsource.bis.data.entity.TableViewEntity;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by nasanjargal on 7/22/14.
 */
public class AlterColumnBuilder extends DbBuilder {

    private String name;
    private List<QuestionEntity> questions;
    private TableViewEntity table;
    private List<TableViewEntity> multiTable;

    private List<String> queries = new ArrayList<>();
    private String queryAddColumn = "ALTER TABLE %s ADD COLUMN %s %s";
    private String queryDropColumn = "ALTER TABLE %s DROP COLUMN %s";
    private String queryDropTable = "DROP TABLE IF EXISTS %s";
    private String foreignQuery = "CREATE TABLE IF NOT EXISTS %s(record_id int4 references %s(id),choice_id int4 references registration.choice(id),primary key(record_id,choice_id))";

    public AlterColumnBuilder(String name, List<QuestionEntity> questions, TableViewEntity table/*, List<TableViewEntity> multiTable*/) {
        this.name = name;
        this.questions = questions;
        this.table = table;
        this.multiTable = multiTable;
        initAlter();
    }

    private void initAlter() {
        String tableName = SCHEMA + "." + name;
        for (QuestionEntity question : questions) {
            boolean isNew = true;
            for (ColumnViewEntity column : table.getColumns()) {
                if (column.getColumnName().toUpperCase().equals(COLUMN_PREFIX + question.getId())) {
                    isNew = false;
                    if (question.getType() != QuestionType.MULTIPLE_CHOICE) {
                        QuestionType columnType = getQuestionType(column.getDataType());
                        if (columnType != question.getType()) {
                            queries.add(String.format(queryDropColumn, tableName, column.getColumnName()));
                            addAddColumn(tableName, column.getColumnName(), question);
                        }
                    }
                }
            }
            if (isNew) {
                if (question.getType() != QuestionType.MULTIPLE_CHOICE) {
                    addAddColumn(tableName, COLUMN_PREFIX + question.getId(), question);
                }
            }
        }

        for (QuestionEntity question : questions) {
            if (question.getType() != QuestionType.MULTIPLE_CHOICE) {
                queries.add(String.format(queryDropTable, SCHEMA + "." + name + "_" + question.getId()));
            } else {
                String foreignTableName = SCHEMA + "." + name + "_" + question.getId();
                queries.add(String.format(foreignQuery, foreignTableName, SCHEMA + "." + name));
            }
        }
    }

    private void addAddColumn(String tableName, String columnName, QuestionEntity question) {
        String alterQuery = String.format(queryAddColumn, tableName, columnName, getColumnType(question.getType()));
        if (question.getType() == QuestionType.SINGLE_CHOICE)
            alterQuery += " references registration.choice(id)";
        queries.add(alterQuery);
    }

    @Override
    public List<String> getQueries() {
        return queries;
    }
}
