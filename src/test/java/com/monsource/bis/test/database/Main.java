package com.monsource.bis.test.database;

import com.monsource.bis.blank.dao.BlankDao;
import com.monsource.bis.blank.dao.ChoiceDao;
import com.monsource.bis.blank.dao.QuestionDao;
import com.monsource.bis.blank.model.Question;
import com.monsource.bis.blank.model.QuestionType;
import com.monsource.bis.core.exception.EntityNotFoundByIdException;
import com.monsource.bis.data.entity.ChoiceEntity;
import com.monsource.bis.data.entity.QuestionEntity;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.transaction.TransactionConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.transaction.annotation.Transactional;

import java.sql.*;

/**
 * Created by davaana on 7/20/14.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration({"classpath:context-mod.xml", "classpath:context-db.xml", "classpath:context-web.xml"})
@TransactionConfiguration(defaultRollback = false)
public class Main {

    @Autowired
    QuestionDao questionDao;

    @Autowired
    BlankDao blankDao;

    @Autowired
    ChoiceDao choiceDao;

    @Test
    @Transactional
    public void dataBaseCopy() {
        try {
            Class.forName("org.postgresql.Driver");
            Connection connection = null;
            connection = DriverManager.getConnection(
                    "jdbc:postgresql://db.monsource.net/bis",
                    "bis",
                    "bis@123"
            );
            Statement stm = connection.createStatement();
            Statement stmChoice = connection.createStatement();

            ResultSet rs = stm.executeQuery("SELECT id, code, text, parent_id, type, blank_id, format, \"order\" FROM registration.question where blank_id='B02';");
            while (rs.next()){
                QuestionEntity entity = new QuestionEntity();
                entity.setCode(rs.getString("code"));
                entity.setText(rs.getString("text"));
                entity.setBlank(blankDao.get("B02"));
                entity.setType(QuestionType.valueOf(rs.getString("type")));
                try {
                    entity.setParent(questionDao.get(rs.getInt("parent_id")));
                }catch (Exception e){

                }
                entity.setFormat(rs.getString("format"));
                entity.setOrder(rs.getInt("order"));
                entity = questionDao.merge(entity,true);
                Integer id = rs.getInt("id");
                ResultSet rsChoice = stmChoice.executeQuery("SELECT id, code, question_id, text FROM registration.choice where question_id="+id+"");
                while (rsChoice.next()){
                    ChoiceEntity choice = new ChoiceEntity();
                    choice.setQuestion(entity);
                    choice.setText(rsChoice.getString("text"));
                    choice.setCode(rsChoice.getString("code"));

                    System.out.println("choice.getText() = " + choice.getText());
                    choiceDao.merge(choice,true);
                }
//                System.out.println(rs.getObject(1).toString());
            }
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        }

    }
}
