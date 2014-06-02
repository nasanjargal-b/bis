package com.monsource.bis.core.exception;

/**
 * Created by nasanjargal on 5/18/14.
 */
public class EntityNotFoundByIdException extends BaseException {
    public EntityNotFoundByIdException(String entityName, Object id) {
        super(entityName, id);
    }
}
