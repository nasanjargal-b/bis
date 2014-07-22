package com.monsource.bis.blank.dao;

import com.monsource.bis.core.data.HibernateDaoSupport;
import com.monsource.bis.core.exception.EntityNotFoundByIdException;
import com.monsource.bis.data.entity.TableViewEntity;
import org.hibernate.Criteria;
import org.hibernate.criterion.MatchMode;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by nasanjargal on 7/22/14.
 */
@Repository
public class TableViewDao extends HibernateDaoSupport<TableViewEntity> {


    public TableViewEntity getTable(String name) {

        Criteria criteria = this.getSession().createCriteria(TableViewEntity.class);
        criteria.add(Restrictions.ilike("tableName", name, MatchMode.EXACT));

        return (TableViewEntity) criteria.uniqueResult();
    }

    public List<TableViewEntity> findMultiTable(TableViewEntity table) {
        Criteria criteria = this.getSession().createCriteria(TableViewEntity.class);
        criteria.add(Restrictions.ilike("tableName", table.getTableName() + "_", MatchMode.START));

        return criteria.list();
    }
}
