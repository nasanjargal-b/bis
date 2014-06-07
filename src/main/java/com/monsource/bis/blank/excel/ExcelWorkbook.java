package com.monsource.bis.blank.excel;

import com.monsource.bis.blank.exception.BooleanValueNotMatchException;
import com.monsource.bis.blank.exception.DateValueNotMatchException;
import com.monsource.bis.blank.exception.IdColumnNotMatchException;
import com.monsource.bis.blank.model.Blank;
import com.monsource.bis.blank.model.City;
import com.monsource.bis.blank.model.Record;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.*;

import java.awt.*;
import java.io.IOException;
import java.io.InputStream;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

/**
 * Created by nasanjargal on 6/6/14.
 */
public class ExcelWorkbook extends XSSFWorkbook {

    List<ExcelColumn> columns;
    Blank blank;
    List<City> cities;

    public ExcelWorkbook(List<ExcelColumn> columns, Blank blank) {
        this.columns = columns;
        this.blank = blank;
        init();
    }

    public ExcelWorkbook(Blank blank, List<ExcelColumn> columns, InputStream inputStream,List<City> cities) throws IOException {
        super(inputStream);
        this.blank = blank;
        this.columns = columns;
        this.cities = cities;
    }

    private void init() {
        int colIndex = 0;

        XSSFSheet sheet = this.createSheet(blank.getId().toUpperCase());
        sheet.createRow(0);
        sheet.createRow(1);

        sheet.createFreezePane(1, 2);
        XSSFDataFormat dataFormat = this.getCreationHelper().createDataFormat();

        for (ExcelColumn column : columns) {
            XSSFCell[] cells = createCells(colIndex++, sheet);

            cells[0].setCellValue(column.getName());
            cells[1].setCellValue(column.getId().toUpperCase());
            sheet.setColumnWidth(colIndex - 1, column.getWidth() * 10);

            XSSFCellStyle style = this.createCellStyle();

            switch (column.getType()) {
                case DATE:
                    style.setDataFormat(dataFormat.getFormat("YYYY-MM-DD"));
                    sheet.setDefaultColumnStyle(colIndex - 1, style);
                    break;
                case INTEGER:
                    style.setDataFormat(dataFormat.getFormat("#,##0"));
                    sheet.setDefaultColumnStyle(colIndex - 1, style);
            }
        }
    }

    private XSSFCell[] createCells(int index, XSSFSheet sheet) {
        XSSFRow textRow = sheet.getRow(0);
        XSSFRow idRow = sheet.getRow(1);

        XSSFCell textCell = textRow.createCell(index);
        XSSFCell idCell = idRow.createCell(index);

        formatText(textCell);
        formatId(idCell);

        return new XSSFCell[]{textCell, idCell};
    }

    private void formatId(XSSFCell idCell) {
        XSSFCellStyle style = this.createCellStyle();
        borderCell(style);

        XSSFFont font = this.createFont();
        font.setBold(true);
        font.setFontHeightInPoints((short) 9);

        style.setFont(font);

        style.setWrapText(true);
        style.setFillForegroundColor(new XSSFColor(new Color(0, 0, 0)));
        style.setFillPattern(CellStyle.SOLID_FOREGROUND);
        style.setVerticalAlignment(CellStyle.ALIGN_CENTER);

        idCell.setCellStyle(style);
    }

    private void formatText(XSSFCell textCell) {
        XSSFCellStyle style = this.createCellStyle();

        borderCell(style);

        style.setWrapText(true);
        style.setFillForegroundColor(new XSSFColor(new Color(213, 213, 213)));
        style.setFillPattern(CellStyle.SOLID_FOREGROUND);
        style.setVerticalAlignment(CellStyle.ALIGN_CENTER);

        textCell.setCellStyle(style);
    }

    private void borderCell(XSSFCellStyle style) {
        style.setBorderBottom(XSSFCellStyle.BORDER_MEDIUM);
        style.setBorderTop(XSSFCellStyle.BORDER_MEDIUM);
        style.setBorderRight(XSSFCellStyle.BORDER_MEDIUM);
        style.setBorderLeft(XSSFCellStyle.BORDER_MEDIUM);
    }

    public List<Record> getRecords() {
        XSSFSheet sheet = this.getSheetAt(0);
        XSSFRow idRow = sheet.getRow(1);
        List<String> keys = new ArrayList<>();

        for (Cell cell : idRow) {
            String id = cell.getStringCellValue();
            if (validId(id)) {
                keys.add(id.toUpperCase());
            } else {
                throw new IdColumnNotMatchException(cell.getColumnIndex() + 1);
            }
        }

        ArrayList<Record> records = new ArrayList<Record>();

        for (Row row : sheet) {

            Record record = new Record();
            record.setData(new HashMap<String, Object>());

            if (row.getRowNum() == 0 || row.getRowNum() == 1) continue;

            for (int i = 1; i < keys.size(); i++) {
                String key = keys.get(i);
                Cell cell = row.getCell(i);

                setValueToRecord(key, cell, record);
            }

            records.add(record);

        }

        return records;

    }

    private void setValueToRecord(String id, Cell cell, Record record) {
        ExcelColumn column = getColumnById(id);
        Object data = getValue(cell, column);
        if (column.getId().equals("CITY")) {

        }
    }

    private Object getValue(Cell cell, ExcelColumn column) {

        String data = cell.getStringCellValue();
        if (data != null && !data.equals("")) {
            try {
                DateFormat df = new SimpleDateFormat("yyyy-MM-dd");

                switch (column.getType()) {
                    case TEXT:
                    case SINGLE_CHOICE:
                        return data;
                    case DECIMAL:
                        return new Double(data);
                    case INTEGER:
                        return new Integer(data);
                    case DATE:
                        return df.parse(data);
                    case BOOLEAN:
                        if (data.toLowerCase().equals("тийм") || data.toLowerCase().equals("үнэн") || data.toLowerCase().equals("true") || data.toLowerCase().equals("1"))
                            return true;
                        else if (data.toLowerCase().equals("үгүй") || data.toLowerCase().equals("худал") || data.toLowerCase().equals("false") || data.toLowerCase().equals("0"))
                            return false;
                        else throw new BooleanValueNotMatchException(data, cell.getRowIndex() + 1, column.getId());
                    case MULTIPLE_CHOICE:
                }
            } catch (ParseException e) {
                throw new DateValueNotMatchException(cell.getStringCellValue(), cell.getRowIndex() + 1, column.getId());
            }
        }
        return null;
    }

    private ExcelColumn getColumnById(String id) {
        for (ExcelColumn column : columns) {
            if (column.getId().equals(id)) return column;
        }
        return null;
    }

    private boolean validId(String id) {
        if (id != null) {
            id = id.toUpperCase();
            for (ExcelColumn column : columns) {
                if (column.getId().equals(id)) {
                    return true;
                }
            }
        }
        return false;
    }
}
