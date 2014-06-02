package com.monsource.bis.blank.dao;

import com.monsource.bis.core.data.*;
import com.monsource.bis.blank.model.*;
import com.monsource.bis.data.entity.BlankEntity;
import org.hibernate.Criteria;
import org.hibernate.criterion.MatchMode;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.hibernate.transform.Transformers;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BlankDao extends HibernateDaoSupport<BlankEntity> {

    /**
     * @param text
     * @param groupId
     */
    public List<Blanks> find(String text, String groupId) {
        Criteria criteria = this.getSession().createCriteria(BlankEntity.class);

        criteria.createAlias("blankGroup", "blankGroup");

        if (text != null) {
            criteria.add(Restrictions.or(
                    Restrictions.like("id", text, MatchMode.ANYWHERE),
                    Restrictions.like("name", text, MatchMode.ANYWHERE)
            ));
        }

        if (groupId != null) {
            criteria.add(Restrictions.eq("blankGroup.id", groupId));
        }


        criteria.setProjection(Projections.projectionList()
                        .add(Projections.property("id"), "id")
                        .add(Projections.property("name"), "name")
                        .add(Projections.property("blankGroup.name"), "blankGroupName")
        );

        criteria.setResultTransformer(Transformers.aliasToBean(Blanks.class));


        return criteria.list();
    }
}