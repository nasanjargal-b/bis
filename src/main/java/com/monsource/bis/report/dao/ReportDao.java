package com.monsource.bis.report.dao;

import com.monsource.bis.core.data.HibernateDaoSupport;
import com.monsource.bis.data.entity.ReportEntity;
import com.monsource.bis.report.model.Report;
import com.monsource.bis.report.model.Reports;
import org.hibernate.Criteria;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.hibernate.transform.Transformers;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by nasanjargal on 6/15/14.
 */
@Repository
public class ReportDao extends HibernateDaoSupport<ReportEntity> {


    public List<Reports> findByGroupId(Integer groupId) {
        Criteria criteria = this.getSession().createCriteria(ReportEntity.class);

        criteria.createAlias("reportGroup", "reportGroup");

        criteria.add(Restrictions.eq("reportGroup.id", groupId));

        criteria.setProjection(Projections.projectionList()
                        .add(Projections.property("id"), "id")
                        .add(Projections.property("name"), "name")
                        .add(Projections.property("reportGroup.id"), "groupId")
        );

        criteria.setResultTransformer(Transformers.aliasToBean(Reports.class));

        return criteria.list();
    }
}
