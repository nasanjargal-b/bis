package com.monsource.bis.report.dao;

import com.monsource.bis.core.data.DataEntity;
import com.monsource.bis.core.data.HibernateDaoSupport;
import com.monsource.bis.data.entity.type.ReportType;
import com.monsource.bis.report.component.RecordQueryBuilder;
import com.monsource.bis.report.model.Column;
import com.monsource.bis.report.model.Report;
import org.hibernate.SQLQuery;
import org.hibernate.transform.Transformers;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Created by nasanjargal on 7/8/14.
 */
@Repository
public class ReportRecordDao extends HibernateDaoSupport<DataEntity> {

    public List<Map> find(Report report, Integer districtId) {
        String query = null;

        if (report.getType() == ReportType.SIMPLE) {
            RecordQueryBuilder rqb = new RecordQueryBuilder(report, districtId);
            query = rqb.query();
        } else if (report.getType() == ReportType.QUERY) {
            query = report.getQuery();
        }
        SQLQuery sqlQuery = this.getSession().createSQLQuery(query);
        sqlQuery.setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP);
        return sqlQuery.list();
    }

    public List<Column> getQueryMetaData(String query) {
        List<Column> columns = new ArrayList<>();
        SQLQuery sqlQuery = this.getSession().createSQLQuery(query);
        sqlQuery.setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP);
        sqlQuery.setMaxResults(1);
        Map<String, Object> data = (Map<String, Object>) sqlQuery.uniqueResult();

        for (String key : data.keySet()) {
            Column column = new Column();
            column.setCode(key);
            columns.add(column);
        }

        return columns;
    }
}
