package com.monsource.bis.report.component;

/**
 * Created by nasanjargal on 7/15/14.
 */
public class QueryAlias {

    public static enum Join {
        LEFT, INNER, RIGHT
    }

    String alias;
    String table;
    String column;
    String refColumn;
    String refAlias;
    String filterColumn;
    Join join;
    String filter;

    public QueryAlias(String alias, String table, String column, String refColumn, String refAlias, String filterColumn, Join join) {
        this.alias = alias;
        this.table = table;
        this.column = column;
        this.refColumn = refColumn;
        this.refAlias = refAlias;
        this.filterColumn = filterColumn;
        this.join = join;
    }

    public String getAlias() {
        return alias;
    }

    public String getTable() {
        return table;
    }

    public String getColumn() {
        return column;
    }

    public String getRefColumn() {
        return refColumn;
    }

    public String getRefAlias() {
        return refAlias;
    }

    public String getFilterColumn() {
        return filterColumn;
    }

    public Join getJoin() {
        return join;
    }

    public String getFilter() {
        return filter;
    }

    public void setFilter(String filter) {
        this.filter = filter;
    }
}
