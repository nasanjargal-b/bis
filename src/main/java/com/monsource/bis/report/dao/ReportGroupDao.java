package com.monsource.bis.report.dao;

import com.monsource.bis.core.data.HibernateDaoSupport;
import com.monsource.bis.data.entity.ReportGroupEntity;
import com.monsource.bis.report.model.Group;
import org.hibernate.Criteria;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.hibernate.sql.JoinType;
import org.hibernate.transform.Transformers;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by nasanjargal on 6/15/14.
 */
@Repository
public class ReportGroupDao extends HibernateDaoSupport<ReportGroupEntity> {
    public List<Group> findByParent(Integer parentId) {
        Criteria criteria = this.getSession().createCriteria(ReportGroupEntity.class);

        criteria.createAlias("parentGroup", "parentGroup", JoinType.LEFT_OUTER_JOIN);

        if (parentId == null || parentId == 0) {
            criteria.add(Restrictions.isNull("parentGroup"));
        } else {
            criteria.add(Restrictions.eq("parentGroup.id", parentId));
        }

        criteria.setProjection(Projections.projectionList()
                        .add(Projections.property("id"), "id")
                        .add(Projections.property("name"), "name")
                        .add(Projections.property("parentGroup.id"), "parentId")
        );

        criteria.setResultTransformer(Transformers.aliasToBean(Group.class));

        return criteria.list();
    }

    public List<ReportGroupEntity> find(Integer parentId) {
        Criteria criteria = this.getSession().createCriteria(ReportGroupEntity.class);

        criteria.createAlias("parentGroup", "parentGroup", JoinType.LEFT_OUTER_JOIN);

        if (parentId == null || parentId == 0) {
            criteria.add(Restrictions.isNull("parentGroup"));
        } else {
            criteria.add(Restrictions.eq("parentGroup.id", parentId));
        }

        return criteria.list();
    }
}
