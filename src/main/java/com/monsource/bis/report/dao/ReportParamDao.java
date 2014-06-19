package com.monsource.bis.report.dao;

import com.monsource.bis.core.data.HibernateDaoSupport;
import com.monsource.bis.data.entity.ReportParamEntity;
import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by nasanjargal on 6/18/14.
 */
@Repository
public class ReportParamDao extends HibernateDaoSupport<ReportParamEntity> {

    public List<ReportParamEntity> findByReportId(Integer reportId) {
        Criteria criteria = this.getSession().createCriteria(ReportParamEntity.class);
        criteria.createAlias("report", "report");
        criteria.add(Restrictions.eq("report.id", reportId));
        return criteria.list();
    }

    public List<ReportParamEntity> findByQueryId(Integer queryId) {
        Criteria criteria = this.getSession().createCriteria(ReportParamEntity.class);
        criteria.createAlias("reportQuery", "reportQuery");
        criteria.add(Restrictions.eq("reportQuery.id", queryId));
        return criteria.list();
    }

}
