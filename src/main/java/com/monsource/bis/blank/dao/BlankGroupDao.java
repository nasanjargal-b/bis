package com.monsource.bis.blank.dao;

import com.monsource.bis.blank.model.BlankGroups;
import com.monsource.bis.core.data.HibernateDaoSupport;
import com.monsource.bis.data.entity.BlankGroupEntity;
import org.hibernate.Criteria;
import org.hibernate.criterion.MatchMode;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.hibernate.transform.Transformers;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BlankGroupDao extends HibernateDaoSupport<BlankGroupEntity> {

    /**
     * @param text
     */
    public List<BlankGroups> find(String text) {
        Criteria criteria = this.getSession().createCriteria(BlankGroupEntity.class);

        if (text != null) {
            criteria.add(Restrictions.or(
                    Restrictions.like("id", text, MatchMode.ANYWHERE),
                    Restrictions.like("name", text, MatchMode.ANYWHERE)
            ));
        }


        criteria.setProjection(Projections.projectionList()
                        .add(Projections.property("id"), "id")
                        .add(Projections.property("name"), "name")
        );

        criteria.setResultTransformer(Transformers.aliasToBean(BlankGroups.class));


        return criteria.list();
    }
}