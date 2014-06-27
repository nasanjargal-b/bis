package com.monsource.bis.blank.dao;

import com.monsource.bis.core.data.HibernateDaoSupport;
import com.monsource.bis.data.entity.QuestionEntity;
import org.hibernate.Criteria;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by nasanjargal on 6/20/14.
 */
@Repository
public class QuestionDao extends HibernateDaoSupport<QuestionEntity> {


    public List<QuestionEntity> find(String blankId, Integer parentId) {
        Criteria criteria = this.getSession().createCriteria(QuestionEntity.class);

        criteria.createAlias("blank", "blank");

        criteria.add(Restrictions.eq("blank.id", blankId));
        if (parentId != null) {
            criteria.createAlias("parent", "parent");
            criteria.add(Restrictions.eq("parent.id", parentId));
        } else
            criteria.add(Restrictions.isNull("parent"));

        criteria.addOrder(Order.asc("order"));

        return criteria.list();
    }
}
