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
import java.text.ParseException;
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
        List<Record> records = recordDao.find(blankId, researchId, districtId, false);

        return records;
    }

    public void save(String blankId, Integer researchId, Integer districtId, List<Record> records) throws ParseException {
        this.clearEmptyRecords(records);
        AccountEntity account = accountDao.get(authSupport.getAuthDetails().getId());
        List<QuestionEntity> questionEntities = questionDao.findWithoutGroup(blankId);
        ResearchEntity research = researchDao.get(researchId);
        DistrictEntity district = districtDao.get(districtId);

        /*for (Record record : records) {
            RecordEntity recordEntity = getRecordEntity(blank, research, district, account, record);
            recordDao.merge(recordEntity, false);
        }*/

        for (Record record : records) {
            recordDao.merge(record, blankId, research.getId(), district.getId(), account.getId(), questionEntities);
        }

        recordDao.flush();
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

    public void delete(String blankId, List<Record> records) {
        for (Record record : records) {
            if (record.get("id") != null) {
                Integer id = (Integer) record.get("id");
                recordDao.delete(blankId, id);
            }
        }
    }
}
