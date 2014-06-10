package com.monsource.bis.blank.exception;

import com.monsource.bis.core.exception.BaseException;

/**
 * Created by nasanjargal on 6/6/14.
 */
public class IdColumnNotMatchException extends UnknownCellValueException {
    public IdColumnNotMatchException(int rowIndex, int columnIndex) {
        super(rowIndex, columnIndex);
    }
}
