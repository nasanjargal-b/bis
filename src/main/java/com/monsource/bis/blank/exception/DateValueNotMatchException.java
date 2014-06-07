package com.monsource.bis.blank.exception;

import com.monsource.bis.core.exception.BaseException;

/**
 * Created by nasanjargal on 6/6/14.
 */
public class DateValueNotMatchException extends BaseException {
    public DateValueNotMatchException(String value, int rowIndex, String columnId) {
        super(value, rowIndex, columnId);
    }
}
