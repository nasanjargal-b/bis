package com.monsource.bis.report.dao;

import com.monsource.bis.core.data.HibernateDaoSupport;
import com.monsource.bis.data.entity.ResearchEntity;
import com.monsource.bis.report.model.Research;
import org.hibernate.Criteria;
import org.hibernate.criterion.Projections;
import org.hibernate.transform.Transformers;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by nasanjargal on 7/15/14.
 */
@Repository
public class ReportResearchDao extends HibernateDaoSupport<ResearchEntity> {
    public List<Research> findAll() {
        Criteria criteria = this.getSession().createCriteria(ResearchEntity.class);

        criteria.setProjection(Projections.projectionList()
                        .add(Projections.property("id"), "id")
                        .add(Projections.property("name"), "name")
                        .add(Projections.property("year"), "year")
        );

        criteria.setResultTransformer(Transformers.aliasToBean(Research.class));

        return criteria.list();
    }
}
