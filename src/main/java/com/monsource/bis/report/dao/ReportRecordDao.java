package com.monsource.bis.report.dao;

import com.monsource.bis.core.data.DataEntity;
import com.monsource.bis.core.data.HibernateDaoSupport;
import com.monsource.bis.report.component.RecordQueryBuilder;
import com.monsource.bis.report.model.Report;
import org.hibernate.SQLQuery;
import org.hibernate.transform.Transformers;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * Created by nasanjargal on 7/8/14.
 */
@Repository
public class ReportRecordDao extends HibernateDaoSupport<DataEntity> {

    public List<Map> find(Report report, Integer districtId) {

        RecordQueryBuilder rqb = new RecordQueryBuilder(report, districtId);

        SQLQuery query = this.getSession().createSQLQuery(rqb.query());

        query.setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP);

        return query.list();
    }
}
