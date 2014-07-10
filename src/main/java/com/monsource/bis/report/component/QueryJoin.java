package com.monsource.bis.report.component;

/**
 * Created by nasanjargal on 7/9/14.
 */
public class QueryJoin {

    public static enum Join {
        LEFT, RIGHT, INNER
    }

    private String alias;
    private String name;
    private String schema;
    private Integer questionId;
    private Join join;

    public QueryJoin(String alias, String name, String schema, Integer questionId, Join join) {
        this.alias = alias;
        this.name = name;
        this.schema = schema;
        this.questionId = questionId;
        this.join = join;
    }

    public String getAlias() {
        return alias;
    }

    public String getName() {
        return name;
    }

    public String getSchema() {
        return schema;
    }

    public Integer getQuestionId() {
        return questionId;
    }

    public Join getJoin() {
        return join;
    }
}
