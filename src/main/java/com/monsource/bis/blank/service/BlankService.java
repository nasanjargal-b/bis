package com.monsource.bis.blank.service;

import com.monsource.bis.blank.dao.*;
import com.monsource.bis.blank.model.*;
import com.monsource.bis.core.exception.BaseException;
import com.monsource.bis.data.entity.BlankEntity;
import com.monsource.bis.data.entity.BlankGroupEntity;
import com.monsource.bis.data.entity.ResearchEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.TransactionCallbackWithoutResult;
import org.springframework.transaction.support.TransactionTemplate;

import java.io.StringReader;
import java.io.StringWriter;
import java.util.ArrayList;
import java.util.List;

@Service
public class BlankService {

    @Autowired
    BlankDao blankDao;
    @Autowired
    QuestionService questionService;
    @Autowired
    TransactionTemplate template;

    /**
     * @param id
     */
    public Blank get(String id) {
        BlankEntity entity = blankDao.get(id);

        Blank blank = new Blank(
                entity.getId(),
                entity.getName(),
                entity.getBlankGroup().getId()
        );

        return blank;
    }

    /**
     * @param blank
     */
    public void save(Blank blank) {

        /*questionService.saveBlankTable(blank);

        QuestionsXmlModel questionsXmlModel = new QuestionsXmlModel();
        questionsXmlModel.setQuestions(blank.getQuestions());
        StringWriter writer = new StringWriter();
        marshaller.marshal(questionsXmlModel, writer);

        BlankEntity blankEntity = new BlankEntity();
        blankEntity.setId(blank.getId());
        blankEntity.setName(blank.getName());
        blankEntity.setBlankGroup(new BlankGroupEntity(blank.getBlankGroupId()));
        blankEntity.setQuestions(writer.getBuffer().toString());

        blankDao.merge(blankEntity);*/
    }

    /**
     * @param ids
     */
    public void delete(final List<String> ids) {
        /*final BlankService blankSrv = this;
        template.execute(new TransactionCallbackWithoutResult() {
            @Override
            protected void doInTransactionWithoutResult(TransactionStatus status) {
                try {
                    for (String id : ids) {
                        Blank blank = blankSrv.get(id);

                        questionService.dropBlankTable(blank);

                        BlankEntity blankEntity = blankDao.get(id);

                        blankEntity.setResearches(new ArrayList<ResearchEntity>());
                        blankDao.merge(blankEntity);
                        blankDao.delete(blankEntity);
                    }
                } catch (JAXBException e) {
                    throw new BaseException(e);
                }
            }
        });*/
    }

}