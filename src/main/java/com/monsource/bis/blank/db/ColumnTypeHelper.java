package com.monsource.bis.blank.db;

import com.monsource.bis.blank.model.ColumnType;

public class ColumnTypeHelper {

    private ColumnTypeHelper() {

    }

    /**
     * @param sqlType
     */
    public static ColumnType getColumnType(String sqlType) {
        if (sqlType.equals("bool"))
            return ColumnType.BOOLEAN;
        if (sqlType.equals("text"))
            return ColumnType.TEXT;
        if (sqlType.equals("numeric"))
            return ColumnType.DECIMAL;
        if (sqlType.equals("integer"))
            return ColumnType.INTEGER;
        if (sqlType.equals("date"))
            return ColumnType.DATE;

        throw new IllegalArgumentException("Sql Type not match ColumnType");
    }

    /**
     * @param columnType
     */
    public static String getSqlType(ColumnType columnType) {
        switch (columnType) {
            case BOOLEAN:
                return "bool";
            case TEXT:
                return "text";
            case DECIMAL:
                return "numeric";
            case INTEGER:
                return "integer";
            case DATE:
                return "date";
        }

        return null;
    }

}