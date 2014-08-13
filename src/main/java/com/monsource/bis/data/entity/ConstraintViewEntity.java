package com.monsource.bis.data.entity;

import com.monsource.bis.core.data.DataEntity;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import java.util.List;

/**
 * Created by nasanjargal on 7/22/14.
 */
@Entity
@Table(name = "constraints_view", schema = "bdata", catalog = "PUBLIC")
public class ConstraintViewEntity implements DataEntity {
    private String constraintName;
    private String tableName;
    private String tableSchema;
    private String columnName;

    @Id
    @Column(name = "constraint_name")
    public String getConstraintName() {
        return constraintName;
    }

    public void setConstraintName(String constraintName) {
        this.constraintName = constraintName;
    }

    @Basic
    @Column(name = "table_name")
    public String getTableName() {
        return tableName;
    }

    public void setTableName(String tableName) {
        this.tableName = tableName;
    }

    @Basic
    @Column(name = "table_schema")
    public String getTableSchema() {
        return tableSchema;
    }

    public void setTableSchema(String tableSchema) {
        this.tableSchema = tableSchema;
    }

    @Basic
    @Column(name = "column_name")
    public String getColumnName() {
        return columnName;
    }

    public void setColumnName(String columnName) {
        this.columnName = columnName;
    }
}
