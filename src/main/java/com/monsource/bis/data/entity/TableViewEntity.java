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
@Table(name = "table_view", schema = "bdata", catalog = "PUBLIC")
public class TableViewEntity implements DataEntity {
    private String tableName;
    private String tableSchema;
    private String tableType;
    private List<ColumnViewEntity> columns;

    @Id
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
    @Column(name = "table_type")
    public String getTableType() {
        return tableType;
    }

    public void setTableType(String tableType) {
        this.tableType = tableType;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        TableViewEntity that = (TableViewEntity) o;

        if (tableName != null ? !tableName.equals(that.tableName) : that.tableName != null) return false;
        if (tableSchema != null ? !tableSchema.equals(that.tableSchema) : that.tableSchema != null) return false;
        if (tableType != null ? !tableType.equals(that.tableType) : that.tableType != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = tableSchema != null ? tableSchema.hashCode() : 0;
        result = 31 * result + (tableName != null ? tableName.hashCode() : 0);
        result = 31 * result + (tableType != null ? tableType.hashCode() : 0);
        return result;
    }

    @OneToMany(fetch = FetchType.EAGER)
    @Fetch(FetchMode.SUBSELECT)
    @JoinColumn(name = "table_name", referencedColumnName = "table_name")
    public List<ColumnViewEntity> getColumns() {
        return columns;
    }

    public void setColumns(List<ColumnViewEntity> columns) {
        this.columns = columns;
    }
}
