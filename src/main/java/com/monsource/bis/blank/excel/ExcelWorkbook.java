package com.monsource.bis.blank.excel;

import com.monsource.bis.blank.exception.*;
import com.monsource.bis.blank.model.Blank;
import com.monsource.bis.blank.model.City;
import com.monsource.bis.blank.model.District;
import com.monsource.bis.blank.model.Record;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.*;

import java.awt.Color;
import java.io.IOException;
import java.io.InputStream;
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

    ValueConverter valueConverter;

    public ExcelWorkbook(List<ExcelColumn> columns, Blank blank) {
        this.columns = columns;
        this.blank = blank;
        init();
    }

    public ExcelWorkbook(Blank blank, List<ExcelColumn> columns, InputStream inputStream, List<City> cities) throws IOException {
        super(inputStream);
        this.blank = blank;
        this.columns = columns;
        this.cities = cities;
        valueConverter = new ValueConverter(this);
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

    private ExcelColumn getColumnById(String id) {
        for (ExcelColumn column : columns)
            if (column.getId().toLowerCase().equals(id))
                return column;
        return null;
    }

    public List<Record> getRecords() {

        Sheet sheet = this.getSheetAt(0);
        Row idRow = sheet.getRow(1);

        List<ExcelColumn> sortedColumns = new ArrayList<>();

        for (Cell cell : idRow) {
            cell.setCellType(Cell.CELL_TYPE_STRING);
            ExcelColumn column = getColumnById(cell.getStringCellValue().toLowerCase());
            if (column != null)
                sortedColumns.add(column);
            else
                throw new IdColumnNotMatchException(cell.getColumnIndex());
        }

        ArrayList<Record> records = new ArrayList<>();

        for (Row row : sheet) {

            if (row.getRowNum() == 0 || row.getRowNum() == 1) continue;

            Record record = new Record();
            record.setData(new HashMap<String, Object>());
            for (int i = 1; i < sortedColumns.size(); i++) {
                ExcelColumn column = sortedColumns.get(i);
                Object value = valueConverter.getValue(row.getCell(i), column);

                if(column.isBase()) {

                    if (column.getId().equals("CITY")) {

                    }

                }else {
                    record.getData().put(column.getId().toLowerCase(), value);
                }

            }




            /*for (int i = 1; i < keys.size(); i++) {
                String key = keys.get(i);
                Cell cell = row.getCell(i);

                setValueToRecord(key, cell, record);
            }*/

            records.add(record);

        }

        throw new UnsupportedOperationException();
//        return records;
    }

    /*public List<Record> getRecords() {
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

    }*/

    /*private void setValueToRecord(String id, Cell cell, Record record) {
        ExcelColumn column = getColumnById(id);
        Object data = getValue(cell, column);
        if (column.getId().equals("CITY")) {
            record.setCityId(getCityId((String) data, cell));
        } else if (column.getId().equals("DISTRICT") && data != null) {
            record.setDistrictId(getDistrictId(record.getCityId(), (String) data, cell));
        } else if (column.getId().equals("DESC")) {
            record.setDescription(data == null ? null : data.toString());
        } else if (column.getId().equals("WORKER")) {
            record.setFillWorker(data == null ? null : data.toString());
        } else if (column.getId().equals("POSITION")) {
            record.setFillPosition(data == null ? null : data.toString());
        } else if (column.getId().equals("PHONE")) {
            record.setFillPhone(data == null ? null : data.toString());
        } else if (column.getId().equals("DATE")) {
            record.setFillDate(data == null ? null : (Date) data);
        } else if (column.getId().equals("RESEARCHER")) {
            record.setResearcher(data == null ? null : data.toString());
        } else if (column.getId().equals("ID")) {
//            record.setResearcher(data == null ? null : data.toString());
        } else {
            record.getData().put(column.getId().toLowerCase(), data);
        }
    }

    private Object getValue(Cell cell, ExcelColumn column) {

        Object data = getCellValue(cell);

        if (data != null && !data.equals("")) {
            switch (column.getType()) {
                case TEXT:
                case SINGLE_CHOICE:
                    cell.setCellType(Cell.CELL_TYPE_STRING);
                    return cell.getStringCellValue();
                case DECIMAL:
                    return data;
                case INTEGER:
                    return new Double((Double) data).intValue();
                case DATE:
                    boolean date1904 = this.isDate1904();
                    return DateUtil.getJavaDate((Double) data, date1904);
                case BOOLEAN:
                    String value = data.toString().toLowerCase();
                    if (value.equals("тийм") || value.equals("үнэн") || value.equals("true") || value.equals("1"))
                        return true;
                    else if (value.equals("үгүй") || value.equals("худал") || value.equals("false") || value.equals("0"))
                        return false;
                    else throw new BooleanValueNotMatchException(value, cell.getRowIndex() + 1, column.getId());
                case MULTIPLE_CHOICE:
                    return Arrays.asList(data.toString().split(";"));
            }
        }
        return null;
    }

    private Object getCellValue(Cell cell) {
        if (cell == null) return null;
        XSSFFormulaEvaluator formulaEvaluator = this.getCreationHelper().createFormulaEvaluator();
        int cellType = formulaEvaluator.evaluateInCell(cell).getCellType();

        Object data = null;
        switch (cellType) {
            case Cell.CELL_TYPE_NUMERIC:
                data = cell.getNumericCellValue();
                break;
            case Cell.CELL_TYPE_BOOLEAN:
                data = cell.getBooleanCellValue();
                break;
            case Cell.CELL_TYPE_FORMULA:
                CellValue cellValue = formulaEvaluator.evaluate(cell);
                switch (cellValue.getCellType()) {
                    case Cell.CELL_TYPE_NUMERIC:
                        data = cellValue.getNumberValue();
                        break;
                    case Cell.CELL_TYPE_STRING:
                        data = cellValue.getStringValue();
                        break;
                    case Cell.CELL_TYPE_BOOLEAN:
                        data = cellValue.getBooleanValue();
                        break;
                }
                break;
            case Cell.CELL_TYPE_STRING:
                data = cell.getStringCellValue();
                break;
        }

        return data;
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
    }*/

    private Integer getCityId(String cityName, Cell cell) {
        if (cityName != null)
            for (City city : cities) {
                if (city.getName().toLowerCase().equals(cityName.toLowerCase())) return city.getId();
            }
        throw new CityNotMatchException(cityName, cell.getRowIndex() + 1);
    }

    private Integer getDistrictId(Integer cityId, String districtName, Cell cell) {
        String cityName = null;
        for (City city : cities) {
            if (city.getId().equals(cityId)) {
                cityName = city.getName();
                for (District district : city.getDistricts()) {
                    if (district.getName().toLowerCase().equals(districtName.toLowerCase())) return district.getId();
                }
            }
        }

        throw new DistrictNotMatchException(districtName, cityName, cell.getRowIndex() + 1);
    }
}
