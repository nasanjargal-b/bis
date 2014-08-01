package com.monsource.bis.blank.dao;

import com.monsource.bis.blank.component.BlankCreateBuilder;
import com.monsource.bis.blank.component.BlankDropBuilder;
import com.monsource.bis.core.data.*;
import com.monsource.bis.blank.model.*;
import com.monsource.bis.data.entity.BlankEntity;
import org.hibernate.Criteria;
import org.hibernate.SQLQuery;
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
     * @param researchId
     */
    public List<Blanks> find(String text, String groupId, Integer researchId) {
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

        if (researchId != null) {
            criteria.createAlias("researches", "researches");
            criteria.add(Restrictions.eq("researches.id", researchId));
        }


        criteria.setProjection(Projections.projectionList()
                        .add(Projections.property("id"), "id")
                        .add(Projections.property("name"), "name")
                        .add(Projections.property("blankGroup.name"), "blankGroupName")
        );

        criteria.setResultTransformer(Transformers.aliasToBean(Blanks.class));


        return criteria.list();
    }

    public List<BlankEntity> findAll() {
        Criteria criteria = this.getSession().createCriteria(BlankEntity.class);
        return criteria.list();
    }

    public Blank single(String id) {
        BlankEntity entity = this.get(id);
        return new Blank(entity.getId(), entity.getName(), entity.getBlankGroup().getId());
    }

    public void mergeDbView(BlankCreateBuilder createBuilder) {

        for (String query : createBuilder.getQueries()) {
            this.getSession().createSQLQuery(query).executeUpdate();
        }

        this.getSession().flush();
    }

    public void deleteDbView(BlankDropBuilder dropBuilder) {
        for (String query : dropBuilder.getQueries()) {
            this.getSession().createSQLQuery(query).executeUpdate();
        }

        this.getSession().flush();
    }
}