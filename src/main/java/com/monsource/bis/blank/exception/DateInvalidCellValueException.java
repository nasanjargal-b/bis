package com.monsource.bis.blank.exception;

import com.monsource.bis.core.exception.BaseException;

/**
 * Created by nasanjargal on 6/6/14.
 */
public class DateInvalidCellValueException extends BaseException {
    public DateInvalidCellValueException(int rowIndex, String columnId, Exception e) {
        super(e, rowIndex, columnId);
    }
}
