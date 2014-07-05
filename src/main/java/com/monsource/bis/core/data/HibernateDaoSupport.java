package com.monsource.bis.core.data;

import com.monsource.bis.core.exception.EntityNotFoundByIdException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.*;
import java.lang.reflect.ParameterizedType;

public class HibernateDaoSupport<E extends DataEntity> implements DataAccessObject<E> {

    @Autowired
    SessionFactory sessionFactory;

    /**
     * @param entity
     */
    @Override()
    public E merge(E entity) {
        return merge(entity, true);
    }

    public E merge(E entity, boolean isAutoFlush) {
        Object merge = this.getSession().merge(entity);
        if(isAutoFlush) this.flush();
        return (E) merge;
    }

    /**
     * @param entity
     */
    @Override()
    public E persist(E entity) {
        this.getSession().persist(entity);
        return entity;
    }

    /**
     * @param entity
     */
    @Override()
    public void delete(E entity) {
        this.getSession().delete(entity);
    }

    /**
     * @param id
     */
    @Override()
    public E get(Serializable id) {
        Class<E> c = (Class<E>) ((ParameterizedType) this.getClass().getGenericSuperclass()).getActualTypeArguments()[0];
        Object entity = this.getSession().get(c, id);
        if (entity == null) throw new EntityNotFoundByIdException(c.getSimpleName(), id);
        return (E) entity;
    }

    @Override
    public void flush() {
        this.getSession().flush();
    }


    protected Session getSession() {
        return sessionFactory.getCurrentSession();
    }

}