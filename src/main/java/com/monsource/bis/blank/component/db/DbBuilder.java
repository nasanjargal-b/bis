package com.monsource.bis.blank.component.db;

import com.monsource.bis.blank.model.QuestionType;

import java.util.List;

/**
 * Created by nasanjargal on 7/22/14.
 */
public abstract class DbBuilder {
    public static final String SCHEMA = "bdata";
    public static final String COLUMN_PREFIX = "Q_";

    public abstract List<String> getQueries();

    protected String getColumnType(QuestionType type) {
        switch (type) {
            case NUMERIC:
                return "float8";
            case DATE:
                return "date";
            case TIME:
                return "time";
            case TEXT:
                return "text";
            case SINGLE_CHOICE:
                return "int4";
        }
        return null;
    }

    protected QuestionType getQuestionType(String dataType) {

        if (dataType.equals("text"))
            return QuestionType.TEXT;
        if (dataType.contains("double"))
            return QuestionType.NUMERIC;
        if (dataType.equals("date"))
            return QuestionType.DATE;
        if (dataType.contains("time"))
            return QuestionType.TIME;
        if (dataType.contains("int"))
            return QuestionType.SINGLE_CHOICE;

        return null;
    }
}
