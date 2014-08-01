package com.monsource.bis.blank.component.db;

import com.monsource.bis.blank.component.db.DbBuilder;
import com.monsource.bis.data.entity.ColumnViewEntity;
import com.monsource.bis.data.entity.QuestionEntity;
import com.monsource.bis.data.entity.TableViewEntity;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by nasanjargal on 7/22/14.
 */
public class DropColumnBuilder extends DbBuilder {
    private String name;
    private List<QuestionEntity> questions;
    private TableViewEntity table;
    private List<TableViewEntity> multiTable;

    List<String> queries = new ArrayList<>();

    private String queryDropColumn = "ALTER TABLE %s DROP COLUMN %s";
    private String queryDropTable = "DROP TABLE IF EXISTS %s";

    public DropColumnBuilder(String name, List<QuestionEntity> questions, TableViewEntity table, List<TableViewEntity> multiTable) {
        this.name = name;
        this.questions = questions;
        this.table = table;
        this.multiTable = multiTable;

        initDrop();
    }

    private void initDrop() {
        for (ColumnViewEntity column : table.getColumns()) {
            String columnName = column.getColumnName().toUpperCase();
            if (columnName.indexOf(COLUMN_PREFIX) == 0) {
                boolean isDrop = true;
                for (QuestionEntity question : questions) {
                    if (columnName.equals(COLUMN_PREFIX + question.getId())) {
                        isDrop = false;
                        break;
                    }
                }

                if (isDrop)
                    queries.add(String.format(queryDropColumn, SCHEMA + "." + name, column.getColumnName()));
            }
        }

        for (TableViewEntity foreignTable : multiTable) {
            String tableName = foreignTable.getTableName().toUpperCase();
            boolean isDrop = true;
            for (QuestionEntity question : questions) {
                String multiTableName = name.toUpperCase() + question.getId();
                System.out.println("tableName = " + tableName);
                System.out.println("multiTableName = " + multiTableName);
                if (tableName.equals(multiTableName)) {
                    isDrop = false;
                    break;
                }
            }

            if (isDrop)
                queries.add(String.format(queryDropTable, SCHEMA + "." + tableName));
        }
    }

    @Override
    public List<String> getQueries() {
        return queries;
    }
}
