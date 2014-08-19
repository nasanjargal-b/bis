package com.monsource.bis.report.dao;

import com.monsource.bis.core.data.HibernateDaoSupport;
import com.monsource.bis.data.entity.ReportEntity;
import com.monsource.bis.report.model.*;
import org.hibernate.Criteria;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.hibernate.sql.JoinType;
import org.hibernate.transform.Transformers;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ReportDao extends HibernateDaoSupport<ReportEntity> {

    /**
     * @param parentId
     */
    public List<Report> find(Integer parentId) {
        Criteria criteria = this.getSession().createCriteria(ReportEntity.class);

        criteria.createAlias("parent", "parent", JoinType.LEFT_OUTER_JOIN);
        criteria.createAlias("blank", "blank", JoinType.LEFT_OUTER_JOIN);
        if (parentId == null)
            criteria.add(Restrictions.isNull("parent"));
        else
            criteria.add(Restrictions.eq("parent.id", parentId));

        criteria.setProjection(Projections.projectionList()
                        .add(Projections.property("id"), "id")
                        .add(Projections.property("name"), "name")
                        .add(Projections.property("blank.id"), "blankId")
                        .add(Projections.property("blank.name"), "blankName")
                        .add(Projections.property("group"), "group")
                        .add(Projections.property("order"), "order")
        );

        criteria.addOrder(Order.asc("order"));

        criteria.setResultTransformer(Transformers.aliasToBean(Report.class));

        return criteria.list();
    }

    public List<ReportEntity> findAll() {
        Criteria criteria = this.getSession().createCriteria(ReportEntity.class);
        criteria.add(Restrictions.eq("group", false));
        return criteria.list();
    }
}