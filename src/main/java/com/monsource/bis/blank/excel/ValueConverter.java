package com.monsource.bis.blank.excel;


import com.monsource.bis.blank.exception.DateNotMatchException;
import com.monsource.bis.blank.exception.UnknownCellValueException;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.FormulaEvaluator;
import org.apache.poi.ss.usermodel.Workbook;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

/**
 * Created by nasanjargal on 6/10/14.
 */
public class ValueConverter {

    Workbook workbook;
    FormulaEvaluator formulaEvaluator;
    DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");

    public ValueConverter(Workbook workbook) {
        this.workbook = workbook;
        formulaEvaluator = workbook.getCreationHelper().createFormulaEvaluator();
    }

    private Cell getFormula(Cell cell) {
        Cell fcell = formulaEvaluator.evaluateInCell(cell);
        return fcell;
    }

    public Object getValue(Cell cell, ExcelColumn column) {

        if (cell == null) return null;

        Object value = null;
        try {
            switch (column.getType()) {
                case BOOLEAN:
                    value = getBooleanValue(cell);
                    break;
                case DATE:
                    value = getDateValue(cell);
                    break;
                case DECIMAL:
                    value = getDoubleValue(cell);
                    break;
                case INTEGER:
                    value = getIntegerValue(cell);
                    break;
                case MULTIPLE_CHOICE:
                    value = getMultipleValue(cell);
                    break;
                default:
                    value = getTextValue(cell);
            }
        } catch (ParseException e) {
            throw new DateNotMatchException(cell.getRowIndex()+1, cell.getColumnIndex() + 1);
        }
        if (value == null && cell.getCellType() != Cell.CELL_TYPE_BLANK) {
            throw new UnknownCellValueException(cell.getRowIndex() + 1, cell.getColumnIndex() + 1);
        }

        return value;

    }

    public String getTextValue(Cell cell) {
        String value = null;
        if (cell.getCellType() == Cell.CELL_TYPE_FORMULA)
            cell = getFormula(cell);

        cell.setCellType(Cell.CELL_TYPE_STRING);
        value = cell.getStringCellValue();
        return value;
    }

    public List<String> getMultipleValue(Cell cell) {
        cell.setCellType(Cell.CELL_TYPE_STRING);
        String[] value = cell.getStringCellValue().split(";");
        return Arrays.asList(value);
    }

    public Integer getIntegerValue(Cell cell) {
        Integer value = null;
        if (cell.getCellType() == Cell.CELL_TYPE_FORMULA)
            cell = getFormula(cell);

        if (cell.getCellType() == Cell.CELL_TYPE_STRING)
            value = new Integer(Double.valueOf(cell.getStringCellValue()).intValue());
        else if (cell.getCellType() == Cell.CELL_TYPE_NUMERIC) {
            value = new Integer(Double.valueOf(cell.getNumericCellValue()).intValue());
        }

        return value;
    }

    public Double getDoubleValue(Cell cell) {
        Double value = null;
        if (cell.getCellType() == Cell.CELL_TYPE_FORMULA)
            cell = getFormula(cell);

        if (cell.getCellType() == Cell.CELL_TYPE_STRING)
            value = Double.valueOf(cell.getStringCellValue());
        else if (cell.getCellType() == Cell.CELL_TYPE_NUMERIC) {
            value = Double.valueOf(cell.getNumericCellValue());
        }

        return value;
    }

    public Date getDateValue(Cell cell) throws ParseException {
        Date value = null;
        if (cell.getCellType() == Cell.CELL_TYPE_FORMULA)
            cell = getFormula(cell);

        if (cell.getCellType() != Cell.CELL_TYPE_NUMERIC) {
            cell.setCellType(Cell.CELL_TYPE_STRING);
            value = dateFormat.parse(cell.getStringCellValue());
        } else {
            value = cell.getDateCellValue();
        }

        return value;
    }

    public Boolean getBooleanValue(Cell cell) {
        Boolean value = null;
        if (cell.getCellType() == Cell.CELL_TYPE_FORMULA)
            cell = getFormula(cell);

        if (cell.getCellType() == Cell.CELL_TYPE_BOOLEAN) {
            value = cell.getBooleanCellValue();
        } else {
            cell.setCellType(Cell.CELL_TYPE_STRING);
            String sValue = cell.getStringCellValue().toLowerCase();

            String[] trueValue = new String[]{"тийм", "үнэн", "1", "true"};
            String[] falseValue = new String[]{"үгүй", "худал", "0", "false"};
            for (int i = 0; i < trueValue.length; i++) {
                String tValue = trueValue[i];
                String fValue = falseValue[i];

                if (tValue.equals(sValue)) {
                    value = true;
                    break;
                }
                if (fValue.equals(sValue)) {
                    value = false;
                    break;
                }
            }

        }

        return value;
    }

}
