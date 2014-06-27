package com.monsource.bis.blank.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.monsource.bis.blank.exception.ChoiceCodeDuplicatedException;
import com.monsource.bis.blank.service.*;
import com.monsource.bis.blank.model.*;
import com.monsource.bis.core.json.JsonData;
import com.monsource.bis.data.entity.ChoiceEntity;
import com.monsource.bis.data.entity.QuestionEntity;
import org.hibernate.exception.ConstraintViolationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.support.TransactionCallback;
import org.springframework.transaction.support.TransactionTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

import com.monsource.bis.blank.dao.*;

@Controller
@RequestMapping("/blank-mod/blank")
public class BlankCtrl {

    @Autowired
    BlankService blankSrv;
    @Autowired
    BlankDao blankDao;
    @Autowired
    QuestionDao questionDao;
    @Autowired
    TransactionTemplate template;

    @RequestMapping("blanks.json")
    @ResponseBody
    public JsonData list(String text, String groupId, Integer researchId) {
        return new JsonData(blankDao.find(text, groupId, researchId));
    }

    /**
     * @param blankId
     * @param node
     */
    @RequestMapping("questions.json")
    @ResponseBody
    public JsonData questions(String blankId, Integer node) {

        node = node != null && node == 0 ? null : node;

        List<QuestionEntity> questions = questionDao.find(blankId, node);
        ArrayList<Question> result = new ArrayList<>();

        for (QuestionEntity questionEntity : questions) {
            Question question = new Question(
                    questionEntity.getId(),
                    questionEntity.getCode(),
                    questionEntity.getText(),
                    questionEntity.getType(),
                    questionEntity.getFormat(),
                    questionEntity.getOrder()
            );

            if (questionEntity.getChoices() != null && questionEntity.getChoices().size() > 0) {
                question.setChoices(new ArrayList<Choice>());
                for (ChoiceEntity choiceEntity : questionEntity.getChoices()) {
                    question.getChoices().add(new Choice(choiceEntity.getId(), choiceEntity.getCode(), choiceEntity.getText()));
                }
            }

            result.add(question);
        }

        return new JsonData(result);
    }

    /**
     * @param id
     */
    @RequestMapping(value = "blank.json", method = RequestMethod.GET)
    @ResponseBody
    public JsonData get(String id) {
        return new JsonData(blankDao.single(id));
    }

    /**
     * @param blank
     */
    @RequestMapping(value = "blank.json", method = RequestMethod.POST)
    @ResponseBody
    @Transactional
    public JsonData save(@RequestBody final Blank blank) throws JsonProcessingException {
        return template.execute(new TransactionCallback<JsonData>() {
            @Override
            public JsonData doInTransaction(TransactionStatus status) {
                try {
                    blankSrv.save(blank);
                    return new JsonData(true);
                } catch (ConstraintViolationException e) {
                    if (e.getMessage().contains("choice_unq"))
                        throw new ChoiceCodeDuplicatedException();
                    throw e;
                }
            }
        });
    }

    /**
     * @param ids
     */
    @RequestMapping(value = "blank.json", method = RequestMethod.DELETE)
    @ResponseBody
    public JsonData delete(@RequestBody final List<String> ids) {
        return template.execute(new TransactionCallback<JsonData>() {
            @Override
            public JsonData doInTransaction(TransactionStatus status) {
                blankSrv.delete(ids);
                return new JsonData(true);
            }
        });
    }

}