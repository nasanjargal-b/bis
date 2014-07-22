package com.monsource.bis.blank.dao;

import com.monsource.bis.blank.component.db.DbBuilder;
import com.monsource.bis.blank.model.Record;
import com.monsource.bis.core.data.DataEntity;
import com.monsource.bis.core.data.HibernateDaoSupport;
import com.monsource.bis.data.entity.QuestionEntity;
import org.apache.commons.lang.StringUtils;
import org.hibernate.SQLQuery;
import org.hibernate.transform.Transformers;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public class RecordDao extends HibernateDaoSupport<DataEntity> {

    String insertQuery = "INSERT INTO bdata.%s(%s) values (%s)";
    String updateQuery = "UPDATE bdata.%s SET %s WHERE id=:id";

    public List<Record> find(String blankId, Integer researchId, Integer districtId) {

        SQLQuery sqlQuery = this.getSession().createSQLQuery("SELECT * FROM bdata.V_" + blankId + " WHERE research_id=:researchId AND district_id = :districtId");

        sqlQuery.setParameter("researchId", researchId);
        sqlQuery.setParameter("districtId", districtId);

        sqlQuery.setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP);

        return sqlQuery.list();
    }

    public List<Record> find(String blankId) {
        SQLQuery sqlQuery = this.getSession().createSQLQuery("SELECT * FROM bdata.V_" + blankId);

        sqlQuery.setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP);

        return sqlQuery.list();
    }

    public void merge(Record record, String blankId, Integer researchId, Integer districtId, Integer accountId, List<QuestionEntity> questions) {

        System.out.println(record);

        List<String> columns = new ArrayList<>();
        List<String> codes = new ArrayList<>();

        columns.add("research_id");
        columns.add("account_id");
        columns.add("district_id");

        codes.add(":research_id");
        codes.add(":account_id");
        codes.add(":district_id");

        for (QuestionEntity question : questions) {
            columns.add(DbBuilder.COLUMN_PREFIX + question.getId());
            codes.add(":" + question.getCode());
        }

        Integer id = (Integer) record.get("id");
        String query;
        if (id == null) {
            query = String.format(insertQuery, blankId, StringUtils.join(columns, ", "), StringUtils.join(codes, ", "));
        } else {
            List<String> updates = new ArrayList<>();
            for (int i = 0; i < columns.size(); i++) {
                String column = columns.get(i);
                String code = codes.get(i);
                updates.add(column + " = " + code);
            }
            query = String.format(updateQuery, blankId, StringUtils.join(updates, ", "));
        }

        SQLQuery sqlQuery = getSession().createSQLQuery(query);

        sqlQuery.setParameter("research_id", researchId);
        sqlQuery.setParameter("district_id", districtId);
        sqlQuery.setParameter("account_id", accountId);

        for (QuestionEntity question : questions) {
            sqlQuery.setParameter(question.getCode(), record.get(question.getCode()));
        }

        if(id != null) {
            sqlQuery.setParameter("id", id);
        }

        sqlQuery.executeUpdate();
    }
}