package com.monsource.bis.test.blank;

import com.monsource.bis.blank.dao.RecordDao;
import com.monsource.bis.blank.model.QuestionType;
import com.monsource.bis.data.entity.QuestionEntity;
import org.apache.commons.lang.StringUtils;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.transaction.TransactionConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.transaction.annotation.Transactional;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by nasanjargal on 7/22/14.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration({"classpath:context-mod.xml", "classpath:context-db.xml", "classpath:context-web.xml"})
@TransactionConfiguration(defaultRollback = false)
public class TestImporter {

    @Autowired
    RecordDao recordDao;

    @Autowired
    SessionFactory sessionFactory;


    @Test
    @Transactional
    public void importData() {
        Session session = sessionFactory.getCurrentSession();

        /*List<RecordEntity> records = recordDao.find("B02");

        String query = "INSERT INTO bdata.b02(%s) values (%s)";
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        DateFormat timeFormat = new SimpleDateFormat("hh:mm:ss");

        for (RecordEntity record : records) {
            List<String> columns = new ArrayList<>();
            List<String> datas = new ArrayList<>();

            columns.add("research_id");
            columns.add("account_id");
            columns.add("district_id");

            datas.add(record.getResearch().getId() + "");
            datas.add(record.getAccount().getId() + "");
            datas.add(record.getDistrict().getId() + "");

            for (RecordQuestionEntity recordQuestion : record.getRecordQuestions()) {
                QuestionEntity question = recordQuestion.getQuestion();
                if (question.getType() == QuestionType.MULTIPLE_CHOICE) continue;
                switch (question.getType()) {
                    case DATE:
                        if (recordQuestion.getDate() != null) {
                            columns.add("q_" + question.getId());
                            datas.add("'" + dateFormat.format(recordQuestion.getDate()) + "'");
                        }
                        break;
                    case TIME:
                        if (recordQuestion.getTime() != null) {
                            columns.add("q_" + question.getId());
                            datas.add("'" + timeFormat.format(recordQuestion.getTime()) + "'");
                        }
                        break;
                    case NUMERIC:
                        if (recordQuestion.getNumeric() != null) {
                            columns.add("q_" + question.getId());
                            datas.add(recordQuestion.getNumeric() + "");
                        }
                        break;
                    case TEXT:
                        if (recordQuestion.getString() != null) {
                            columns.add("q_" + question.getId());
                            datas.add("'" + recordQuestion.getString() + "'");
                        }
                        break;
                    case SINGLE_CHOICE:
                        if (recordQuestion.getChoices().size() > 0) {
                            columns.add("q_" + question.getId());
                            datas.add(recordQuestion.getChoices().get(0).getId() + "");
                        }
                        break;
                }
            }

            session.createSQLQuery(String.format(query, StringUtils.join(columns, ","), StringUtils.join(datas, ","))).executeUpdate();
        }*/
    }

}
