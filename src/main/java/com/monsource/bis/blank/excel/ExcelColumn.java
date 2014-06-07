package com.monsource.bis.blank.excel;

import com.monsource.bis.blank.model.ColumnType;
import org.apache.poi.xssf.usermodel.XSSFCell;

/**
 * Created by nasanjargal on 6/6/14.
 */
public class ExcelColumn {
    private short width;
    private String name;
    private String id;
    private ColumnType type = ColumnType.TEXT;

    public ExcelColumn(short width, String name, String id) {
        this.width = width;
        this.name = name;
        this.id = id;
    }

    public ExcelColumn(short width, String name, String id, ColumnType type) {
        this.width = width;
        this.name = name;
        this.id = id;
        this.type = type;
    }

    public short getWidth() {
        return width;
    }

    public String getName() {
        return name;
    }

    public String getId() {
        return id;
    }

    public ColumnType getType() {
        return type;
    }
}
