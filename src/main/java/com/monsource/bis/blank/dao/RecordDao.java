package com.monsource.bis.blank.dao;

import com.monsource.bis.blank.component.db.DbBuilder;
import com.monsource.bis.blank.model.QuestionType;
import com.monsource.bis.blank.model.Record;
import com.monsource.bis.core.data.DataEntity;
import com.monsource.bis.core.data.HibernateDaoSupport;
import com.monsource.bis.data.entity.ChoiceEntity;
import com.monsource.bis.data.entity.QuestionEntity;
import org.apache.commons.lang.StringUtils;
import org.hibernate.SQLQuery;
import org.hibernate.transform.Transformers;
import org.hibernate.type.StandardBasicTypes;
import org.hibernate.type.Type;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.sql.Time;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@Repository
public class RecordDao extends HibernateDaoSupport<DataEntity> {

    @Autowired
    QuestionDao questionDao;

    String insertQuery = "INSERT INTO bdata.%s(%s) values (%s)";
    String updateQuery = "UPDATE bdata.%s SET %s WHERE id=:id";

    public List<Record> find(String blankId, Integer researchId, Integer districtId, boolean choiceCode) {

        SQLQuery sqlQuery = this.getSession().createSQLQuery("SELECT * FROM bdata.V_" + blankId + " WHERE research_id=:researchId AND district_id = :districtId");

        sqlQuery.setParameter("researchId", researchId);
        sqlQuery.setParameter("districtId", districtId);

        sqlQuery.setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP);


        List<Map> recordDatas = sqlQuery.list();
        List<Record> records = convertRecord(recordDatas, blankId, choiceCode);

        return records;
    }

    public List<Record> find(String blankId) {
        SQLQuery sqlQuery = this.getSession().createSQLQuery("SELECT * FROM bdata.V_" + blankId);

        sqlQuery.setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP);

        List<Map> recordDatas = sqlQuery.list();
        List<Record> records = convertRecord(recordDatas, blankId, false);

        return records;
    }

    private List<Record> convertRecord(List<Map> recordDatas, String blankId, boolean choiceCode) {
        List<Record> records = new ArrayList<>();

        List<QuestionEntity> questions = choiceCode ? questionDao.findWithoutGroup(blankId) : null;

        for (Map recordData : recordDatas) {
            Record record = new Record();
            record.putAll(recordData);

            if (choiceCode) {
                for (QuestionEntity question : questions) {
                    if (question.getType() == QuestionType.SINGLE_CHOICE || question.getType() == QuestionType.MULTIPLE_CHOICE) {
                        Integer choiceId = (Integer) record.get(question.getCode());
                        for (ChoiceEntity choice : question.getChoices()) {
                            if (choice.getId() == choiceId) {
                                record.put(question.getCode(), choice.getCode());
                                break;
                            }
                        }
                    }
                }
            }

            records.add(record);

        }

        return records;
    }

    public void merge(Record record, String blankId, Integer researchId, Integer districtId, Integer accountId, List<QuestionEntity> questions) throws ParseException {

        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        DateFormat timeFormat = new SimpleDateFormat("hh:mm:ss");

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
            Object value = record.get(question.getCode());
            Type type = null;
            switch (question.getType()) {
                case MULTIPLE_CHOICE:
                case SINGLE_CHOICE:
                    if (value != null)
                        value = value instanceof Integer ? (Integer) value : new Integer(value + "");
                    type = StandardBasicTypes.INTEGER;
                    break;
                case TEXT:
                    if (value != null)
                        value = value + "";
                    type = StandardBasicTypes.STRING;
                    break;
                case NUMERIC:
                    if (value != null)
                        value = value instanceof Double ? (Double) value : new Double(value + "");
                    type = StandardBasicTypes.DOUBLE;
                    break;
                case DATE:
                    if (value != null)
                        if (value instanceof Long)
                            value = new Date((Long) value);
                        else if (value instanceof String)
                            value = dateFormat.parse((String) value);
                    type = StandardBasicTypes.DATE;
                    break;
                case TIME:
                    if (value != null)
                        if (value instanceof Long)
                            value = new Time((Long) value);
                        else if (value instanceof String)
                            value = timeFormat.parse((String) value);
                    type = StandardBasicTypes.TIME;
                    break;

            }
            sqlQuery.setParameter(question.getCode(), value, type);
        }

        if (id != null) {
            sqlQuery.setParameter("id", id);
        }

        sqlQuery.executeUpdate();
    }

    public void delete(String blankId, Integer id) {
        SQLQuery sqlQuery = this.getSession().createSQLQuery("DELETE FROM bdata." + blankId + " WHERE id = :id");
        sqlQuery.setInteger("id", id);
        sqlQuery.executeUpdate();
        this.flush();
    }
}