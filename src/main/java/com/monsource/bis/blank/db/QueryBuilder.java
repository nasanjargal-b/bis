package com.monsource.bis.blank.db;

import org.hibernate.SQLQuery;
import org.hibernate.Session;

import java.util.ArrayList;
import java.util.List;

public class QueryBuilder {

    private Table table;
    private Session session;
    private List<String> queries = new ArrayList<>();

    /**
     * @param table
     * @param session
     */
    public QueryBuilder(Table table, Session session) {
        this.table = table;
        this.session = session;


    }

    public void execute() {
        if (!existsTable(this.table)) {
            create(this.table);
        } else {
            alter();
        }

        for (String query : queries) {
            session.createSQLQuery(query).executeUpdate();
        }
    }

    private void create(Table table) {
        StringBuilder query = new StringBuilder();
        query.append("CREATE TABLE " + table.getFullName() + " (");
        for (Column column : table.getColumns()) {
            query.append(column.getName() + " ");
            query.append(column.getType() + " ");
            query.append(column.isNotNull() ? "NOT NULL " : "NULL ");
            if (column.getForeignColumn() != null && column.getForeignTable() != null) {
                query.append("REFERENCES " + column.getForeignTable() + "(" + column.getForeignColumn() + ")");
            }
            query.append(",");
        }
        query.append("primary key(id));");

        queries.add(query.toString());

        if (table.getTables() != null)
            for (Table subTable : table.getTables()) {
                if (!existsTable(subTable)) create(subTable);
            }
    }

    private void alter() {
        List<String> tableColumns = session.createSQLQuery("SELECT column_name FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = :tableName AND table_schema = :tableSchema")
                .setString("tableName", table.getName().toLowerCase())
                .setString("tableSchema", table.getSchema().toLowerCase())
                .list();

        for (String tableColumn : tableColumns) {
            for (Column column : table.getColumns()) {
                if (column.getName().toLowerCase().equals(tableColumn.toLowerCase()) && !column.isBase()) {
                    queries.add("ALTER TABLE " + table.getFullName() + " ALTER COLUMN " + tableColumn + " TYPE " + column.getType() + ";");
                    break;
                }
            }
        }

        for (String tableColumn : tableColumns) {
            boolean notHave = true;
            for (Column column : table.getColumns()) {
                if (tableColumn.toLowerCase().equals(column.getName().toLowerCase())) {
                    notHave = false;
                    break;
                }
            }
            if (notHave) {
                queries.add("ALTER TABLE " + table.getFullName() + " DROP COLUMN " + tableColumn + ";");
            }
        }

        for (Column column : table.getColumns()) {
            boolean notHave = true;
            for (String tableColumn : tableColumns) {
                if (tableColumn.toLowerCase().equals(column.getName().toLowerCase())) {
                    notHave = false;
                    break;
                }
            }
            if (notHave) {
                queries.add("ALTER TABLE " + table.getFullName() + " ADD COLUMN " + column.getName() + " " + column.getType() + " " + (column.isNotNull() ? "SET NOT NULL" : "NULL") + ";");
            }
        }

        List<String> subTables = getSubTables();

        for (String subTable : subTables) {
            boolean notHave = true;
            for (Table subTableObj : table.getTables()) {
                if (subTable.toLowerCase().equals(subTableObj.getName().toLowerCase())) {
                    notHave = false;
                    break;
                }
            }
            if (notHave) {
                queries.add("DROP TABLE " + table.getSchema() + "." + subTable + ";");
            }
        }

        for (Table subTableObj : table.getTables()) {
            boolean notHave = true;
            for (String subTable : subTables) {
                if (subTable.toLowerCase().equals(subTableObj.getName().toLowerCase())) {
                    notHave = false;
                    break;
                }
            }
            if (notHave) {
                create(subTableObj);
            }
        }

    }

    public void drop() {
        if (existsTable(table)) {

            List<String> subTables = getSubTables();

            for (String subTable : subTables) {
                queries.add("DROP TABLE " + table.getSchema() + "." + subTable);
            }

            queries.add("DROP TABLE " + table.getFullName());
        }

        for (String query : queries) {
            session.createSQLQuery(query).executeUpdate();
        }
    }

    private List<String> getSubTables() {
        return session.createSQLQuery("" +
                "SELECT relname FROM pg_class WHERE oid IN (" +
                "   SELECT conrelid FROM pg_constraint WHERE conname IN (" +
                "       SELECT constraint_name FROM INFORMATION_SCHEMA.CONSTRAINT_COLUMN_USAGE WHERE table_name = :tableName AND column_name='id' AND table_schema = :tableSchema)" +
                ") AND relname <> :tableName")
                .setString("tableName", table.getName().toLowerCase())
                .setString("tableSchema", table.getSchema().toLowerCase())
                .list();
    }

    private boolean existsTable(Table table) {
        SQLQuery query = session.createSQLQuery("SELECT table_name FROM INFORMATION_SCHEMA.TABLES WHERE table_name = :tableName AND table_schema = :tableSchema");
        query.setString("tableName", table.getName().toLowerCase());
        query.setString("tableSchema", table.getSchema().toLowerCase());

        Object result = query.uniqueResult();

        return result != null;
    }

    /**
     * @param column
     */
    private boolean existsColumn(Column column) {
        // TODO - implement QueryBuilder.existsColumn
        throw new UnsupportedOperationException();
    }

}