package com.monsource.bis.blank.dao;

import com.monsource.bis.blank.model.Blank;
import com.monsource.bis.blank.model.Blanks;
import com.monsource.bis.blank.model.Research;
import com.monsource.bis.core.data.HibernateDaoSupport;
import com.monsource.bis.data.entity.BlankEntity;
import com.monsource.bis.data.entity.ResearchEntity;
import org.hibernate.Criteria;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.hibernate.transform.Transformers;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by nyamaa on 6/4/14.
 */
@Repository
public class ResearchDao extends HibernateDaoSupport<ResearchEntity> {

    public List<Research> getAll() {
        Criteria criteria = getSession().createCriteria(ResearchEntity.class);
        criteria.setProjection(Projections.projectionList()
                .add(Projections.property("id"), "id")
                .add(Projections.property("year"), "year")
                .add(Projections.property("active"), "active")
                .add(Projections.property("startDate"), "startDate")
                .add(Projections.property("endDate"), "endDate")
                .add(Projections.property("description"), "description")
        );
        criteria.setResultTransformer(Transformers.aliasToBean(Research.class));
        List<Research> models = criteria.list();
        for (Research model : models) {
            Criteria blankCriteria = getSession().createCriteria(BlankEntity.class);
            blankCriteria.createAlias("researches", "researches");
            blankCriteria.add(Restrictions.eq("researches.id", model.getId()));
            blankCriteria.setProjection(Projections.projectionList()
                    .add(Projections.property("id"), "id")
                    .add(Projections.property("name"), "name")
            );
            blankCriteria.setResultTransformer(Transformers.aliasToBean(Blanks.class));
            List<Blanks> blanks = blankCriteria.list();
            model.setBlanks(blanks);
        }
        return models;
    }

    public Research getModel(Integer id) {
        Criteria criteria = getSession().createCriteria(ResearchEntity.class);
        criteria.add(Restrictions.eq("id", id));
        criteria.setProjection(Projections.projectionList()
                .add(Projections.property("id"), "id")
                .add(Projections.property("year"), "year")
                .add(Projections.property("active"), "active")
                .add(Projections.property("startDate"), "startDate")
                .add(Projections.property("endDate"), "endDate")
                .add(Projections.property("description"), "description")
        );
        criteria.setResultTransformer(Transformers.aliasToBean(Research.class));
        Research model = (Research) criteria.uniqueResult();
        Criteria blankCriteria = getSession().createCriteria(BlankEntity.class);
        blankCriteria.createAlias("researches", "researches");
        blankCriteria.createAlias("blankGroup", "blankGroup");
        blankCriteria.add(Restrictions.eq("researches.id", model.getId()));
        blankCriteria.setProjection(Projections.projectionList()
                .add(Projections.property("id"), "id")
                .add(Projections.property("name"), "name")
                .add(Projections.property("questions"), "questions")
//                .add(Projections.property("blankGroup.id"), "blankGroupId")
        );
        blankCriteria.setResultTransformer(Transformers.aliasToBean(Blanks.class));
        List<Blanks> blanks = blankCriteria.list();
        model.setBlanks(blanks);
        return model;
    }
}
