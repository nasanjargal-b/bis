package com.monsource.bis.report.dao;

import com.monsource.bis.core.data.DataEntity;
import com.monsource.bis.core.data.HibernateDaoSupport;
import com.monsource.bis.data.entity.type.ReportParameterType;
import com.monsource.bis.data.entity.type.ReportType;
import com.monsource.bis.report.component.RecordQueryBuilder;
import com.monsource.bis.report.model.Column;
import com.monsource.bis.report.model.Parameter;
import com.monsource.bis.report.model.Report;
import org.hibernate.SQLQuery;
import org.hibernate.transform.Transformers;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Created by nasanjargal on 7/8/14.
 */
@Repository
public class ReportRecordDao extends HibernateDaoSupport<DataEntity> {


    public List<Map> find(Report report, Integer districtId) {

        if (report.getType() == ReportType.JASPER) return new ArrayList<>();

        String query = null;

        if (report.getType() == ReportType.SIMPLE) {
            RecordQueryBuilder rqb = new RecordQueryBuilder(report, districtId);
            query = rqb.query();
        } else if (report.getType() == ReportType.QUERY) {
            query = convertSqlQuery(report.getQuery(), report.getParameters());
        }
        SQLQuery sqlQuery = this.getSession().createSQLQuery(query);
        if (districtId != null) {
            sqlQuery.setInteger("district_id", districtId);
        }
        sqlQuery.setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP);
        return sqlQuery.list();
    }

    private String convertSqlQuery(String query, List<Parameter> parameters) {
        Map<String, String> changer = new HashMap<>();

        query = query.replace("\n", " ");
        query = query.substring(query.toUpperCase().indexOf("SELECT"));

        if (parameters != null) {
            for (Parameter parameter : parameters) {
                Object value = getParameterValue(parameter);
                query = findParameter(query, parameter.getCode(), value);
            }
        }

        findColumn(query, changer);
        findBlank(query, changer);

        for (String origin : changer.keySet()) {
            String value = changer.get(origin);
            query = query.replace(origin, value);
        }

        return query;
    }

    private String findParameter(String query, String code, Object value) {
        if (value instanceof String) {
            query = query.replace("$P{" + code + "}", "'" + value + "'");
        } else {
            query = query.replace("$P{" + code + "}", value + "");
        }

        return query;
    }

    private void findBlank(String query, Map<String, String> changer) {
        Pattern pattern = Pattern.compile("\\$[Bb]?\\{[A-Za-z0-9_$]+\\}");
        Matcher matcher = pattern.matcher(query);

        while (matcher.find()) {
            String column = query.substring(matcher.start(), matcher.end());
            String newColumn = column.replaceAll("\\$[Bb]?\\{", "bdata.V_").replaceAll("\\}", "");
            changer.put(column, newColumn);
        }
    }

    private void findColumn(String query, Map<String, String> changer) {
        Pattern pattern = Pattern.compile("\\$[Cc]?\\{[A-Za-z0-9_$]+\\}");
        Matcher matcher = pattern.matcher(query);

        while (matcher.find()) {
            String column = query.substring(matcher.start(), matcher.end());
            String newColumn = column.replaceAll("\\$[Cc]?\\{", "\"").replaceAll("\\}", "\"");
            changer.put(column, newColumn);
        }
    }

    public List<Column> getQueryMetaData(Report report) {
        List<Column> columns = new ArrayList<>();
        SQLQuery sqlQuery = this.getSession().createSQLQuery(this.convertSqlQuery(report.getQuery(), report.getParameters()));
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

    public Object getParameterValue(Parameter parameter) {
        switch (parameter.getType()) {
            case CITY:
                return parameter.getCityId();
            case DISTRICT:
                return parameter.getDistrictId();
            case RESEARCH:
                return parameter.getResearchId();
            default:
                String query = convertSqlQuery(parameter.getQuery(), null);
                List data = this.getSession().createSQLQuery(query).list();
                if (data.size() == 1)
                    return data.get(0);
                else
                    return data;
        }
    }
}
