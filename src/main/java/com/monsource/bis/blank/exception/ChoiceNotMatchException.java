package com.monsource.bis.blank.exception;

import com.monsource.bis.core.exception.BaseException;
import org.apache.commons.lang.StringUtils;

import java.util.Collection;
import java.util.List;

/**
 * Created by nasanjargal on 6/5/14.
 */
public class ChoiceNotMatchException extends BaseException {
    public ChoiceNotMatchException(String id, Object value, Collection values) {
        super(id, value, StringUtils.join(values, "; "));
    }
}
