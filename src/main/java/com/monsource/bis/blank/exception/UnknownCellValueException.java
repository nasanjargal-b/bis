package com.monsource.bis.blank.exception;

import com.monsource.bis.core.exception.BaseException;

/**
 * Created by nasanjargal on 6/10/14.
 */
public class UnknownCellValueException extends BaseException {

    BaseException cause;

    public UnknownCellValueException(int rowIndex, Integer columnIndex) {
        super(rowIndex, columnIndex);
    }

    public UnknownCellValueException(int rowIndex, Integer columnIndex, BaseException cause) {
        super(rowIndex, columnIndex);
        this.cause = cause;
    }

    public BaseException getCause() {
        return cause;
    }
}
