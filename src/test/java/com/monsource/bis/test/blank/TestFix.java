package com.monsource.bis.test.blank;

import com.monsource.bis.data.entity.QuestionEntity;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.transaction.TransactionConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.support.TransactionTemplate;

import java.util.List;

/**
 * Created by nasanjargal on 7/20/14.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration({"classpath:context-mod.xml", "classpath:context-db.xml", "classpath:context-web.xml"})
@TransactionConfiguration(defaultRollback = false)
public class TestFix {

    @Autowired
    TransactionTemplate template;
    @Autowired
    SessionFactory sessionFactory;

    @Test
    @Transactional
    public void fix() {
        Session session = sessionFactory.getCurrentSession();

        QuestionEntity questionEntity = (QuestionEntity) session.get(QuestionEntity.class, 7500);

        /*Criteria criteria = session.createCriteria(RecordEntity.class);
        criteria.createAlias("blank", "blank");
        criteria.add(Restrictions.eq("blank.id", "B01"));

        List<RecordEntity> list = criteria.list();

        for (RecordEntity recordEntity : list) {
            RecordQuestionEntity recordQuestion = new RecordQuestionEntity();
            recordQuestion.setQuestion(questionEntity);
            recordQuestion.setNumeric((double) 2014);
            recordQuestion.setRecord(recordEntity);

            session.merge(recordQuestion);
        }

        session.flush();*/
    }

}
