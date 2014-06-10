package com.monsource.bis.blank.exception;

import com.monsource.bis.core.exception.BaseException;

/**
 * Created by nasanjargal on 6/10/14.
 */
public class UnknownCellValueException extends BaseException {
    public UnknownCellValueException(int rowIndex, String id) {
        super(rowIndex, id);
    }
}
