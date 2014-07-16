package com.monsource.bis.blank.service;

import com.monsource.bis.account.dao.AccountDao;
import com.monsource.bis.account.dao.DistrictDao;
import com.monsource.bis.blank.dao.BlankDao;
import com.monsource.bis.blank.dao.QuestionDao;
import com.monsource.bis.blank.dao.RecordDao;
import com.monsource.bis.blank.dao.ResearchDao;
import com.monsource.bis.blank.model.Record;
import com.monsource.bis.core.security.AuthSupport;
import com.monsource.bis.data.entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Time;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by nasanjargal on 6/30/14.
 */
@Service
public class RecordService {

    @Autowired
    RecordDao recordDao;
    @Autowired
    QuestionDao questionDao;
    @Autowired
    AuthSupport authSupport;
    @Autowired
    AccountDao accountDao;
    @Autowired
    BlankDao blankDao;
    @Autowired
    ResearchDao researchDao;
    @Autowired
    DistrictDao districtDao;

    public List<Record> getRecords(String blankId, Integer researchId, Integer districtId) {
        List<RecordEntity> recordEntities = recordDao.find(blankId, researchId, districtId);

        List<Record> records = new ArrayList<>();

        for (RecordEntity recordEntity : recordEntities) {
            records.add(getRecord(recordEntity));
        }

        return records;
    }

    private Record getRecord(RecordEntity recordEntity) {

        Record record = new Record();
        record.put("id", recordEntity.getId());

        for (RecordQuestionEntity recordQuestionEntity : recordEntity.getRecordQuestions()) {
            QuestionEntity question = recordQuestionEntity.getQuestion();
            String code = question.getCode();

            switch (question.getType()) {
                case TEXT:
                    record.put(code, recordQuestionEntity.getString());
                    break;
                case NUMERIC:
                    record.put(code, recordQuestionEntity.getNumeric());
                    break;
                case DATE:
                    record.put(code, recordQuestionEntity.getDate());
                    break;
                case TIME:
                    record.put(code, recordQuestionEntity.getTime());
                    break;
                case MULTIPLE_CHOICE:
                    List<Integer> ids = new ArrayList<>();
                    for (ChoiceEntity choiceEntity : recordQuestionEntity.getChoices()) {
                        ids.add(choiceEntity.getId());
                    }
                    record.put(code, ids);
                    break;
                case SINGLE_CHOICE:
                    if (recordQuestionEntity.getChoices() != null && recordQuestionEntity.getChoices().size() > 0)
                        record.put(code, recordQuestionEntity.getChoices().get(0).getId());
                    else
                        record.put(code, null);
                    break;
            }
        }

        return record;
    }

    public void save(String blankId, Integer researchId, Integer districtId, List<Record> records) {
        this.clearEmptyRecords(records);
        AccountEntity account = accountDao.get(authSupport.getAuthDetails().getId());
        BlankEntity blank = blankDao.get(blankId);
        ResearchEntity research = researchDao.get(researchId);
        DistrictEntity district = districtDao.get(districtId);

        for (Record record : records) {
            RecordEntity recordEntity = getRecordEntity(blank, research, district, account, record);
            recordDao.merge(recordEntity, false);
        }

        recordDao.flush();
    }

    private RecordEntity getRecordEntity(BlankEntity blank, ResearchEntity research, DistrictEntity district, AccountEntity account, Record record) {
        RecordEntity recordEntity;

        if (record.get("id") != null) {
            recordEntity = recordDao.get((Integer) record.get("id"));
        } else {
            recordEntity = new RecordEntity();
            recordEntity.setId((Integer) record.get("id"));
            recordEntity.setRecordQuestions(new ArrayList<RecordQuestionEntity>());
        }
        recordEntity.setBlank(blank);
        recordEntity.setDistrict(district);
        recordEntity.setResearch(research);
        recordEntity.setAccount(account);
        recordEntity.setCreatedDate(new Timestamp(new Date().getTime()));

        for (String code : record.keySet()) {
            if (code.equals("id")) continue;

            Object value = record.get(code);

            QuestionEntity questionEntity = questionDao.getByCode(blank.getId(), code);

            RecordQuestionEntity recordQuestionEntity = getRecordQuestion(recordEntity, questionEntity.getId());

            recordQuestionEntity.setRecord(recordEntity);
            recordQuestionEntity.setQuestion(questionEntity);

            switch (questionEntity.getType()) {
                case TEXT:
                    if (value == null)
                        recordQuestionEntity.setString(null);
                    else
                        recordQuestionEntity.setString(value + "");
                    break;
                case NUMERIC:
                    if (value == null)
                        recordQuestionEntity.setNumeric(null);
                    else
                        recordQuestionEntity.setNumeric(Double.valueOf(value + ""));
                    break;
                case DATE:
                    if (value == null)
                        recordQuestionEntity.setDate(null);
                    else {
                        long time = 0;
                        if (value instanceof Double)
                            time = ((Double) value).longValue();
                        else if (value instanceof Integer)
                            time = ((Integer) value).longValue();
                        else
                            time = (long) value;
                        recordQuestionEntity.setDate(new Date(time));
                    }
                    break;
                case TIME:
                    if (value == null)
                        recordQuestionEntity.setTime(null);
                    else {
                        long time = 0;
                        if (value instanceof Double)
                            time = ((Double) value).longValue();
                        else if (value instanceof Integer)
                            time = ((Integer) value).longValue();
                        else
                            time = (long) value;
                        recordQuestionEntity.setTime(new Time(time));
                    }
                    break;
                case MULTIPLE_CHOICE:
                    if (value == null) {
                        recordQuestionEntity.getChoices().clear();
                    } else {
                        List<Integer> choiceIds = (List<Integer>) value;
                        for (Integer choiceId : choiceIds) {
                            recordQuestionEntity.getChoices().add(new ChoiceEntity(choiceId));
                        }
                    }
                    break;
                case SINGLE_CHOICE:
                    if (value == null)
                        recordQuestionEntity.getChoices().clear();
                    else
                        recordQuestionEntity.getChoices().add(new ChoiceEntity((Integer) value));
                    break;
            }
            recordEntity.getRecordQuestions().add(recordQuestionEntity);
        }

        return recordEntity;
    }

    private RecordQuestionEntity getRecordQuestion(RecordEntity recordEntity, Integer questionId) {
        for (RecordQuestionEntity recordQuestionEntity : recordEntity.getRecordQuestions()) {
            if (recordQuestionEntity.getQuestion() != null && recordQuestionEntity.getQuestion().getId() == questionId) {
                recordQuestionEntity.getChoices().clear();
                return recordQuestionEntity;
            }
        }

        RecordQuestionEntity recordQuestionEntity = new RecordQuestionEntity();
        recordQuestionEntity.setChoices(new ArrayList<ChoiceEntity>());
        return recordQuestionEntity;
    }

    private void clearEmptyRecords(List<Record> records) {
        List<Record> removeRecords = new ArrayList<>();

        for (Record record : records) {
            for (String key : record.keySet()) {
                Object data = record.get(key);
                if (data != null && data instanceof String) {
                    String str = (String) data;
                    str = str.replaceAll(" ", "");
                    if (str.equals("")) {
                        record.put(key, null);
                    }
                }
            }
        }

        for (Record record : records) {
            boolean remove = true;
            for (String key : record.keySet()) {
                if (record.get(key) != null) {
                    remove = false;
                    break;
                }
            }

            if (remove) {
                removeRecords.add(record);
            }
        }

        for (Record removeRecord : removeRecords) {
            records.remove(removeRecord);
        }
    }

    public void delete(List<Record> records) {
        for (Record record : records) {
            if (record.get("id") != null) {
                Integer id = (Integer) record.get("id");
                recordDao.delete(recordDao.get(id));
            }
        }
    }
}
