package com.monsource.bis.blank.service;

import com.monsource.bis.blank.exception.QuestionCodeEmptyException;
import com.monsource.bis.blank.model.*;
import com.monsource.bis.data.entity.BlankEntity;
import com.monsource.bis.data.entity.BlankGroupEntity;
import com.monsource.bis.data.entity.ChoiceEntity;
import com.monsource.bis.data.entity.QuestionEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

import com.monsource.bis.blank.dao.*;

@Service
public class BlankService {

    @Autowired
    BlankDao blankDao;
    @Autowired
    QuestionDao questionDao;

    /**
     * @param blank
     */
    public void save(Blank blank) {
        BlankEntity blankEntity = new BlankEntity();

        blankEntity.setId(blank.getId());
        blankEntity.setName(blank.getName());
        blankEntity.setBlankGroup(new BlankGroupEntity(blank.getBlankGroupId()));

        if (blankEntity.getQuestions() == null)
            blankEntity.setQuestions(new ArrayList<QuestionEntity>());
        else
            blankEntity.getQuestions().clear();

        if (blank.getQuestions() != null) {
            List<QuestionEntity> questions = getQuestionEntities(blank.getQuestions(), null, null, blankEntity);
            blankEntity.getQuestions().addAll(questions);
        }

        blankDao.merge(blankEntity);

    }

    private List<QuestionEntity> getQuestionEntities(List<Question> questions, List<QuestionEntity> questionEntities, QuestionEntity parent, BlankEntity blankEntity) {
        questionEntities = questionEntities == null ? new ArrayList<QuestionEntity>() : questionEntities;

        for (Question question : questions) {

            if (question.getCode() == null || question.getCode().equals(""))
                throw new QuestionCodeEmptyException();

            QuestionEntity questionEntity = new QuestionEntity();

            questionEntity.setId(question.getId());
            questionEntity.setCode(question.getCode());
            questionEntity.setBlank(blankEntity);
            questionEntity.setText(question.getText());
            questionEntity.setFormat(question.getFormat());
            questionEntity.setOrder(question.getOrder());
            questionEntity.setParent(parent);
            questionEntity.setType(question.getType());


            questionEntity.setChoices(new ArrayList<ChoiceEntity>());
            if (question.getChoices() != null)
                for (Choice choice : question.getChoices()) {
                    ChoiceEntity choiceEntity = new ChoiceEntity(choice.getId(), choice.getCode(), choice.getText(), questionEntity);
                    questionEntity.getChoices().add(choiceEntity);
                }

            if (question.getChildren() != null)
                questionEntities = getQuestionEntities(question.getChildren(), questionEntities, questionEntity, blankEntity);

            questionEntities.add(questionEntity);
        }


        return questionEntities;
    }

    private QuestionEntity getQuestionEntity(Question question, QuestionEntity parent, BlankEntity blankEntity) {

        QuestionEntity questionEntity = new QuestionEntity();
        /*if (question.getId() == null || question.getId() == 0)
            questionEntity = new QuestionEntity();
        else
            questionEntity = questionDao.get(question.getId());*/

        questionEntity.setId(question.getId());
        questionEntity.setCode(question.getCode());
        questionEntity.setText(question.getText());
        questionEntity.setBlank(blankEntity);
        questionEntity.setFormat(question.getFormat());
        questionEntity.setOrder(question.getOrder());

        questionEntity.setParent(parent);
        questionEntity.setType(question.getType());

        if (questionEntity.getChoices() == null)
            questionEntity.setChoices(new ArrayList<ChoiceEntity>());

        if (questionEntity.getChildren() == null)
            questionEntity.setChildren(new ArrayList<QuestionEntity>());

        if (question.getChoices() != null) {
            for (Choice choice : question.getChoices()) {
                ChoiceEntity choiceEntity = new ChoiceEntity(choice.getId(), choice.getCode(), choice.getText(), questionEntity);
                questionEntity.getChoices().add(choiceEntity);
            }
        }

        if (question.getChildren() != null) {
            for (Question child : question.getChildren()) {
                questionEntity.getChildren().add(getQuestionEntity(child, questionEntity, blankEntity));
            }
        }

        return questionEntity;
    }

    /**
     * @param ids
     */
    public void delete(List<String> ids) {
        for (String id : ids) {
            blankDao.delete(blankDao.get(id));
        }
    }

}