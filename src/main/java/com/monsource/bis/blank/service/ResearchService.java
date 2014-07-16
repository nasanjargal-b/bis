package com.monsource.bis.blank.service;

//import com.monsource.bis.blank.controller.RecordFilter;
import com.monsource.bis.blank.dao.BlankDao;
import com.monsource.bis.blank.dao.RecordDao;
import com.monsource.bis.blank.dao.ResearchDao;
import com.monsource.bis.blank.model.Blank;
import com.monsource.bis.blank.model.Blanks;
import com.monsource.bis.blank.model.Record;
import com.monsource.bis.blank.model.Research;
import com.monsource.bis.core.exception.BaseException;
import com.monsource.bis.data.entity.BlankEntity;
import com.monsource.bis.data.entity.ResearchEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.TransactionCallbackWithoutResult;
import org.springframework.transaction.support.TransactionTemplate;

import javax.xml.bind.JAXBException;
import java.util.*;

/**
 * Created by nyamaa on 6/4/14.
 */
@Service
public class ResearchService {
    @Autowired
    ResearchDao researchDao;
    @Autowired
    BlankDao blankDao;
    @Autowired
    RecordDao recordDao;
    @Autowired
    BlankService blankSrv;
    @Autowired
    TransactionTemplate template;

    public List<Research> getAll() {
        return researchDao.getAll();
    }

    public void save(Research model) {
        ResearchEntity entity = new ResearchEntity();
        if (model.getId() != null && model.getId() != 0) {
            entity.setId(model.getId());
        }
        entity.setActive(model.getActive());
        entity.setName(model.getName());
        entity.setDescription(model.getDescription());
        entity.setEndDate(model.getEndDate());
        entity.setStartDate(model.getStartDate());
        entity.setYear(model.getYear());
        List<BlankEntity> blanks = new ArrayList<BlankEntity>();
        for (Blanks blank : model.getBlanks()) {
            BlankEntity blankEntity = blankDao.get(blank.getId());
            blanks.add(blankEntity);
        }
        entity.setBlanks(blanks);
        researchDao.merge(entity);
    }

    public Research getModel(Integer id) {
        return researchDao.getModel(id);
    }

    public void delete(final Integer id) {
        /*template.execute(new TransactionCallbackWithoutResult() {
            @Override
            protected void doInTransactionWithoutResult(TransactionStatus status) {
                try {
                    ResearchEntity research = researchDao.get(id);
                    for (BlankEntity blankEntity : blankDao.findAll()) {
                        Blank blank = blankSrv.get(blankEntity.getId());
                        RecordFilter filter = new RecordFilter();
                        filter.setResearchId(research.getId());
                        Map<String, Object> result = recordDao.find(blankEntity.getId(), null, null, filter);
                        List<Record> records = (List<Record>) result.get("records");
                        List<Integer> ids = new ArrayList<>();
                        for (Record record : records) {
                            ids.add(record.getId());
                        }
                        recordDao.delete(blank, ids);
                    }

                    researchDao.delete(research);
                } catch (JAXBException e) {
                    throw new BaseException(e);
                }
            }
        });*/
    }
}
