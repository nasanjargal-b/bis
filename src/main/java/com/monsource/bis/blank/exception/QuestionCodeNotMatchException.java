package com.monsource.bis.blank.exception;

import com.monsource.bis.core.exception.BaseException;

/**
 * Created by nasanjargal on 7/4/14.
 */
public class QuestionCodeNotMatchException extends BaseException {
    public QuestionCodeNotMatchException(String code) {
        super(code);
    }
}
