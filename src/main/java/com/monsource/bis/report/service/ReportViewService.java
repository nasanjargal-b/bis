package com.monsource.bis.report.service;

import com.monsource.bis.data.entity.ReportParamEntity;
import com.monsource.bis.report.dao.ReportParamDao;
import com.monsource.bis.report.model.*;
import org.hibernate.SQLQuery;
import org.hibernate.SessionFactory;
import org.hibernate.transform.ResultTransformer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ReportViewService {

    @Autowired
    ReportParamDao reportParamDao;
    @Autowired
    SessionFactory sessionFactory;

    /**
     * @param reportId
     */
    public List<ParamView> getReportParam(Integer reportId) {
        List<ReportParamEntity> params = reportParamDao.findByReportId(reportId);
        return getReportViews(params);
    }

    /**
     * @param queryId
     */
    public List<ParamView> getQueryParam(Integer queryId) {
        List<ReportParamEntity> params = reportParamDao.findByQueryId(queryId);
        return getReportViews(params);
    }

    private List<Object[]> getResultQuery(String query) {
        SQLQuery sqlQuery = sessionFactory.getCurrentSession().createSQLQuery(query);
        sqlQuery.setResultTransformer(new ResultTransformer() {
            @Override
            public Object transformTuple(Object[] tuple, String[] aliases) {
                return tuple;
            }

            @Override
            public List transformList(List collection) {
                return collection;
            }
        });
        return sqlQuery.list();

    }

    private List<ParamView> getReportViews(List<ReportParamEntity> params) {
        ArrayList<ParamView> paramViews = new ArrayList<>();

        for (ReportParamEntity param : params) {
            ParamView paramView = new ParamView();
            paramView.setParam(new Param(param.getId(), param.getName(), param.getLabel(), param.getType(), param.getQuery(), param.getOrder()));
            switch (param.getType()) {
                case MULTIPLE_CHOICE:
                case SINGLE_CHOICE:
                    paramView.setData(getResultQuery(param.getQuery()));
                    break;
            }
            paramViews.add(paramView);
        }

        return paramViews;
    }

}