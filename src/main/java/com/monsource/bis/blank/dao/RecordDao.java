package com.monsource.bis.blank.dao;

//import com.monsource.bis.blank.controller.RecordFilter;
import com.monsource.bis.blank.exception.ChoiceNotMatchException;
import com.monsource.bis.blank.model.Blank;
import com.monsource.bis.blank.model.Question;
import com.monsource.bis.blank.model.Record;
import com.monsource.bis.blank.service.BlankService;
//import com.monsource.bis.blank.service.QuestionService;
import com.monsource.bis.core.data.HibernateDaoSupport;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.type.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.xml.bind.JAXBException;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@Repository
public class RecordDao extends HibernateDaoSupport {
/*
//    @Autowired
//    QuestionService questionSrv;
    @Autowired
    BlankService blankSrv;

    *//**
     * @param blankId
     * @param start
     * @param limit
     * @param filter
     *//*
    public Map<String, Object> find(String blankId, Integer start, Integer limit*//*, RecordFilter filter*//*) throws JAXBException {

        *//*Session session = this.getSession();
        Blank blank = blankSrv.get(blankId);

        SQLQuery sqlQuery = createDataQuery(blank, filter, false);

        if (start != null && limit != null) {
            sqlQuery.setFirstResult(start);
            sqlQuery.setMaxResults(limit);
        }

        sqlQuery.setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP);

        List<Map> results = sqlQuery.list();

        List<Question> questions = questionSrv.getColumnsWithoutGroup(blank.getQuestions());

        List<Record> records = new ArrayList<>();

        for (Map result : results) {
            Record record = new Record(
                    (Integer) result.get("id"),
                    (Integer) result.get("account_id"),
                    (Integer) result.get("research_id"),
                    (Integer) result.get("city_id"),
                    (Integer) result.get("district_id"),
                    (String) result.get("description"),
                    (Date) result.get("created_date"),
                    (String) result.get("fill_worker"),
                    (String) result.get("fill_position"),
                    (String) result.get("fill_phone"),
                    (Date) result.get("fill_date"),
                    (String) result.get("researcher"),
                    (String) result.get("username"),
                    (String) result.get("city_name"),
                    (String) result.get("district_name")
            );

            Map data = new HashMap();
            for (Question question : questions) {
                String questionId = question.getId().toLowerCase();

                if (question.getType() == ColumnType.MULTIPLE_CHOICE || question.getType() == ColumnType.SINGLE_CHOICE) {
                    SQLQuery subQuery = session.createSQLQuery("SELECT value FROM " + questionSrv.getSchema() + "." + blank.getId() + questionId + " WHERE ref_id = :refId");
                    subQuery.setInteger("refId", record.getId());

                    if (question.getType() == ColumnType.MULTIPLE_CHOICE) {
                        data.put(questionId, subQuery.list());
                    } else {
                        data.put(questionId, subQuery.uniqueResult());
                    }

                } else {
                    data.put(questionId, result.get(questionId));
                }
            }

            record.setData(data);
            records.add(record);
        }

        SQLQuery totalQuery = createDataQuery(blank, filter, true);

        int total = ((BigInteger) totalQuery.uniqueResult()).intValue();

        Map<String, Object> result = new HashMap<String, Object>();

        result.put("records", records);
        result.put("total", total);

        return result;*//*
        return null;

    }

    private SQLQuery createDataQuery(Blank blank, RecordFilter filter, boolean count) {

        Session session = this.getSession();

        String query = null;
        if (!count)
            query = "SELECT b.*,a.username,c.name AS city_name, d.name AS district_name FROM " + questionSrv.getSchema() + "." + blank.getId() + " AS b " +
                    "INNER JOIN public.account AS a ON b.account_id = a.id " +
                    "INNER JOIN public.city AS c ON b.city_id = c.id " +
                    "LEFT JOIN public.district AS d ON b.district_id = d.id " +
                    "WHERE research_id = :researchId";
        else
            query = "SELECT count(b.id) FROM " + questionSrv.getSchema() + "." + blank.getId() + " AS b " +
                    "INNER JOIN public.account AS a ON b.account_id = a.id " +
                    "INNER JOIN public.city AS c ON b.city_id = c.id " +
                    "LEFT JOIN public.district AS d ON b.district_id = d.id " +
                    "WHERE research_id = :researchId";

        if (filter.getCityId() != null)
            query += " AND b.city_id = :cityId";
        if (filter.getDistrictId() != null)
            query += " AND b.district_id = :districtId";
        if (filter.getUsername() != null)
            query += " AND a.username LIKE :username";
        if (filter.getResearcher() != null)
            query += " AND b.researcher LIKE :researcher";
        if (filter.getCreateDate() != null)
            query += " AND b.created_date = :createDate";


        SQLQuery sqlQuery = session.createSQLQuery(query + (count ? "" : " ORDER BY b.id"));

        sqlQuery.setInteger("researchId", filter.getResearchId());

        if (filter.getCityId() != null)
            sqlQuery.setInteger("cityId", filter.getCityId());
        if (filter.getDistrictId() != null)
            sqlQuery.setInteger("districtId", filter.getDistrictId());
        if (filter.getUsername() != null)
            sqlQuery.setString("username", "%" + filter.getUsername() + "%");
        if (filter.getResearcher() != null)
            sqlQuery.setString("researcher", "%" + filter.getResearcher() + "%");
        if (filter.getCreateDate() != null)
            sqlQuery.setDate("createDate", filter.getCreateDate());

        return sqlQuery;
    }


    public void merge(Blank blank, Integer researchId, Record record) throws ParseException {
        if (record.getId() == null)
            insertRecord(blank, researchId, record);
        else
            updateRecord(blank, researchId, record);
    }

    private void insertRecord(Blank blank, Integer researchId, Record record) throws ParseException {
        *//*List<Question> questions = questionSrv.getColumnsWithoutGroup(blank.getQuestions());

        StringBuilder query = new StringBuilder("INSERT INTO " + questionSrv.getSchema() + "." + blank.getId() + "");
        query.append("(account_id," +
                "research_id," +
                "city_id," +
                "district_id," +
                "description," +
                "created_date," +
                "fill_worker," +
                "fill_position," +
                "fill_phone," +
                "fill_date," +
                "researcher");
        for (Question question : questions) {
            if (question.getType() != ColumnType.SINGLE_CHOICE && question.getType() != ColumnType.MULTIPLE_CHOICE) {
                query.append("," + question.getId().toLowerCase());
            }
        }
        query.append(") VALUES (");
        query.append(":account_id," +
                ":research_id," +
                ":city_id," +
                ":district_id," +
                ":description," +
                ":created_date," +
                ":fill_worker," +
                ":fill_position," +
                ":fill_phone," +
                ":fill_date," +
                ":researcher");
        for (Question question : questions) {
            if (question.getType() != ColumnType.SINGLE_CHOICE && question.getType() != ColumnType.MULTIPLE_CHOICE) {
                query.append(",:" + question.getId().toLowerCase());
            }
        }
        query.append(")");

        SQLQuery sqlQuery = this.getSession().createSQLQuery(query.toString());
        setParams(sqlQuery, researchId, questions, record);
        sqlQuery.executeUpdate();

        record.setId((Integer) this.getSession().createSQLQuery("SELECT max(id) FROM " + questionSrv.getSchema() + "." + blank.getId()).uniqueResult());

        saveChoicesQuestion(blank, questions, record);*//*

    }

    private void updateRecord(Blank blank, Integer researchId, Record record) throws ParseException {
       *//* List<Question> questions = questionSrv.getColumnsWithoutGroup(blank.getQuestions());

        StringBuilder query = new StringBuilder("UPDATE " + questionSrv.getSchema() + "." + blank.getId() + " SET ");
        query.append("account_id = :account_id," +
                "research_id = :research_id," +
                "city_id = :city_id," +
                "district_id = :district_id," +
                "description = :description," +
                "created_date = :created_date," +
                "fill_worker = :fill_worker," +
                "fill_position = :fill_position," +
                "fill_phone = :fill_phone," +
                "fill_date = :fill_date," +
                "researcher = :researcher");
        for (Question question : questions) {
            if (question.getType() != ColumnType.SINGLE_CHOICE && question.getType() != ColumnType.MULTIPLE_CHOICE) {
                String id = question.getId().toLowerCase();
                query.append("," + id + "= :" + id);
            }
        }

        query.append(" WHERE id = :id");

        SQLQuery sqlQuery = this.getSession().createSQLQuery(query.toString());
        setParams(sqlQuery, researchId, questions, record);
        sqlQuery.setInteger("id", record.getId());
        sqlQuery.executeUpdate();

        saveChoicesQuestion(blank, questions, record);*//*
    }

    private void saveChoicesQuestion(Blank blank, List<Question> questions, Record record) {
        *//*for (Question question : questions) {
            String id = question.getId().toLowerCase();
            Object data = record.getData().get(id);
            if (data == null) continue;
            switch (question.getType()) {
                case MULTIPLE_CHOICE:
                case SINGLE_CHOICE:
                    SQLQuery deleteQuery = this.getSession().createSQLQuery("DELETE FROM  " + questionSrv.getSchema() + "." + blank.getId() + id + " WHERE ref_id = :ref_id");
                    SQLQuery subSqlQuery = this.getSession().createSQLQuery("INSERT INTO " + questionSrv.getSchema() + "." + blank.getId() + id + "(value,ref_id) VALUES(:value,:ref_id)");
                    if (data instanceof Collection) {
                        Collection values = (Collection) data;
                        for (Object value : values) {
                            validChoice(question, value);
                        }
                        deleteQuery.setInteger("ref_id", record.getId()).executeUpdate();

                        for (Object value : values) {
                            validChoice(question, value);

                            subSqlQuery.setInteger("ref_id", record.getId());
                            subSqlQuery.setString("value", value + "");
                            subSqlQuery.executeUpdate();
                        }
                    } else {
                        validChoice(question, data);

                        subSqlQuery.setInteger("ref_id", record.getId());
                        subSqlQuery.setString("value", data + "");
                        deleteQuery.setInteger("ref_id", record.getId()).executeUpdate();
                        subSqlQuery.executeUpdate();
                    }
                    break;
            }
        }*//*
    }

    private void validChoice(Question question, Object value) {
        *//*boolean valid = false;
        *//**//*for (String choice : question.getChoices()) {
            if (choice.equals(value)) valid = true;
        }*//**//* //todo

        if (!valid)
            throw new ChoiceNotMatchException(question.getId(), (String) value, question.getChoices());*//*
    }

    private void setParams(SQLQuery sqlQuery, Integer researchId, List<Question> questions, Record record) throws ParseException {
        *//*sqlQuery.setParameter("account_id", record.getAccountId(), IntegerType.INSTANCE);
        sqlQuery.setParameter("research_id", researchId, IntegerType.INSTANCE);
        sqlQuery.setParameter("city_id", record.getCityId(), IntegerType.INSTANCE);
        sqlQuery.setParameter("district_id", record.getDistrictId(), IntegerType.INSTANCE);
        sqlQuery.setParameter("description", record.getDescription(), StringType.INSTANCE);
        sqlQuery.setParameter("created_date", new Date(), DateType.INSTANCE);
        sqlQuery.setParameter("fill_worker", record.getFillWorker(), StringType.INSTANCE);
        sqlQuery.setParameter("fill_position", record.getFillPosition(), StringType.INSTANCE);
        sqlQuery.setParameter("fill_phone", record.getFillPhone(), StringType.INSTANCE);
        sqlQuery.setParameter("fill_date", record.getFillDate(), DateType.INSTANCE);
        sqlQuery.setParameter("researcher", record.getResearcher(), StringType.INSTANCE);

        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");

        for (Question question : questions) {
            String id = question.getId().toLowerCase();
            Object data = record.getData().get(id);
            switch (question.getType()) {
                case TEXT:
                    data = data == null ? null : data + "";
                    sqlQuery.setParameter(id, data, StringType.INSTANCE);
                    break;
                case DECIMAL:
                    data = data == null ? null : (data instanceof Double) ? data : Double.valueOf(data + "");
                    sqlQuery.setParameter(id, data, DoubleType.INSTANCE);
                    break;
                case INTEGER:
                    data = data == null ? null : (data instanceof Integer) ? data : Double.valueOf(data + "").intValue();
                    sqlQuery.setParameter(id, data, IntegerType.INSTANCE);
                    break;
                case BOOLEAN:
                    data = data == null ? null : (data instanceof Boolean) ? data : Boolean.valueOf(data + "");
                    sqlQuery.setParameter(id, data, BooleanType.INSTANCE);
                    break;
                case DATE:
                    data = data == null ? null : (data instanceof Date) ? data : dateFormat.parse(data + "");
                    sqlQuery.setParameter(id, data, DateType.INSTANCE);
                    break;
            }
        }*//*
    }

    public void delete(Blank blank, List<Integer> ids) {

        *//*for (Question question : questionSrv.getColumnsWithoutGroup(blank.getQuestions())) {
            switch (question.getType()) {
                case MULTIPLE_CHOICE:
                case SINGLE_CHOICE:
                    SQLQuery sqlQuery = this.getSession().createSQLQuery("DELETE FROM " + questionSrv.getSchema() + "." + blank.getId() + question.getId() + " WHERE ref_id IN (:ids)");
                    sqlQuery.setParameterList("ids", ids);
                    sqlQuery.executeUpdate();
                    break;
            }
        }


        SQLQuery sqlQuery = this.getSession().createSQLQuery("DELETE FROM " + questionSrv.getSchema() + "." + blank.getId() + " WHERE id IN (:ids)");
        sqlQuery.setParameterList("ids", ids);
        sqlQuery.executeUpdate();

        this.getSession().flush();*//*
    }*/

}