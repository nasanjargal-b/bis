package com.monsource.bis.blank.exception;

import com.monsource.bis.core.exception.BaseException;

/**
 * Created by nasanjargal on 6/7/14.
 */
public class DistrictNotMatchException extends BaseException {
    public DistrictNotMatchException(String districtName, String cityName, int rowIndex) {
        super(districtName, cityName, rowIndex);
    }
}
