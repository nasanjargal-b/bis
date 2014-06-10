package com.monsource.bis.blank.exception;

/**
 * Created by nasanjargal on 6/10/14.
 */
public class DateNotMatchException extends UnknownCellValueException {
    public DateNotMatchException(int rowIndex, int columnIndex) {
        super(rowIndex, columnIndex);
    }
}
