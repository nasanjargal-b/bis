package com.monsource.bis.blank.exception;

import com.monsource.bis.core.exception.BaseException;

/**
 * Created by nasanjargal on 6/7/14.
 */
public class CityNotMatchException extends BaseException {
    public CityNotMatchException(int rowIndex, String cityName) {
        super(rowIndex, cityName);
    }
}
