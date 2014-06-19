package com.monsource.bis.report.dao;

import com.monsource.bis.core.data.HibernateDaoSupport;
import com.monsource.bis.data.entity.ReportParamEntity;
import com.monsource.bis.data.entity.ReportQueryEntity;
import com.monsource.bis.report.model.Param;
import com.monsource.bis.report.model.Query;
import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by nasanjargal on 6/18/14.
 */
@Repository
public class ReportQueryDao extends HibernateDaoSupport<ReportQueryEntity> {
    public List<Query> find(Integer reportId) {
        Criteria criteria = this.getSession().createCriteria(ReportQueryEntity.class);
        criteria.createAlias("report", "report");
        criteria.add(Restrictions.eq("report.id", reportId));
        List<ReportQueryEntity> entities = criteria.list();
        ArrayList<Query> queries = new ArrayList<>();
        for (ReportQueryEntity entity : entities) {
            Query query = new Query(entity.getId(), entity.getName(), entity.getQuery());
            query.setParams(new ArrayList<Param>());
            for (ReportParamEntity paramEntity : entity.getReportParams()) {
                query.getParams().add(new Param(paramEntity.getId(), paramEntity.getName(), paramEntity.getLabel(), paramEntity.getType(), paramEntity.getQuery(), paramEntity.getOrder()));
            }
            queries.add(query);
        }

        return queries;
    }
}
