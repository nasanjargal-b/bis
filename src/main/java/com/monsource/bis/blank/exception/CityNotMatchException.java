package com.monsource.bis.blank.exception;

import com.monsource.bis.core.exception.BaseException;

/**
 * Created by nasanjargal on 6/7/14.
 */
public class CityNotMatchException extends BaseException {
    public CityNotMatchException(String cityName, int rowIndex) {
        super(cityName, rowIndex);
    }
}
