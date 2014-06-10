package com.monsource.bis.core.exception;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * Created by nasanjargal on 5/18/14.
 */
public class BaseException extends RuntimeException {

    private List<Object> params = new ArrayList<>();

    public BaseException(Object... params) {
        this.params.addAll(Arrays.asList(params));
    }

    public BaseException(Throwable e, Object... params) {
        super(e);
        this.params.addAll(Arrays.asList(params));
    }

    public int paramsCount() {
        return params.size();
    }

    public Object getParam(int index) {
        return params.get(index);
    }

    public Object[] getParams() {
        return params.toArray();
    }
}
