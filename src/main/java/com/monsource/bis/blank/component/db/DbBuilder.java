package com.monsource.bis.blank.component.db;

import com.monsource.bis.blank.model.QuestionType;

import java.util.List;

/**
 * Created by nasanjargal on 7/22/14.
 */
public abstract class DbBuilder {
    public static final String SCHEMA = "BDATA";
    public static final String COLUMN_PREFIX = "Q_";

    public abstract List<String> getQueries();

    protected String getColumnType(QuestionType type) {
        switch (type) {
            case NUMERIC:
                return "DOUBLE";
            case DATE:
                return "DATE";
            case TIME:
                return "TIME";
            case TEXT:
                return "LONGVARCHAR";
            case SINGLE_CHOICE:
                return "INTEGER";
        }
        return null;
    }

    protected QuestionType getQuestionType(String dataType) {

        if (dataType.equals("CHARACTER VARYING"))
            return QuestionType.TEXT;
        if (dataType.contains("DOUBLE PRECISION"))
            return QuestionType.NUMERIC;
        if (dataType.equals("DATE"))
            return QuestionType.DATE;
        if (dataType.contains("TIME"))
            return QuestionType.TIME;
        if (dataType.contains("INTEGER"))
            return QuestionType.SINGLE_CHOICE;

        return null;
    }
}
