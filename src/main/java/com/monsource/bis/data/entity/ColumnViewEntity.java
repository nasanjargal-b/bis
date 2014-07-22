package com.monsource.bis.data.entity;

import com.monsource.bis.core.data.DataEntity;

import javax.persistence.*;

/**
 * Created by nasanjargal on 7/22/14.
 */
@Entity
@Table(name = "column_view", schema = "bdata", catalog = "bis")
public class ColumnViewEntity implements DataEntity {
    private String columnName;
    private String dataType;

    @Id
    @Column(name = "column_name")
    public String getColumnName() {
        return columnName;
    }

    public void setColumnName(String columnName) {
        this.columnName = columnName;
    }

    @Basic
    @Column(name = "data_type")
    public String getDataType() {
        return dataType;
    }

    public void setDataType(String dataType) {
        this.dataType = dataType;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ColumnViewEntity that = (ColumnViewEntity) o;

        if (columnName != null ? !columnName.equals(that.columnName) : that.columnName != null) return false;
        if (dataType != null ? !dataType.equals(that.dataType) : that.dataType != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = columnName != null ? columnName.hashCode() : 0;
        result = 31 * result + (dataType != null ? dataType.hashCode() : 0);
        return result;
    }

}
