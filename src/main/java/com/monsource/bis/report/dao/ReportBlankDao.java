package com.monsource.bis.report.dao;

import com.monsource.bis.blank.model.Blank;
import com.monsource.bis.core.data.HibernateDaoSupport;
import com.monsource.bis.data.entity.BlankEntity;
import org.hibernate.Criteria;
import org.hibernate.criterion.Projections;
import org.hibernate.transform.Transformers;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by nasanjargal on 7/7/14.
 */
@Repository
public class ReportBlankDao extends HibernateDaoSupport<BlankEntity> {

    public List<Blank> findAll() {
        Criteria criteria = this.getSession().createCriteria(BlankEntity.class);

        criteria.setProjection(Projections.projectionList()
                        .add(Projections.property("id"), "id")
                        .add(Projections.property("name"), "name")
        );

        criteria.setResultTransformer(Transformers.aliasToBean(Blank.class));

        return criteria.list();
    }
}
