package com.monsource.bis.blank.service;

import com.monsource.bis.blank.dao.QuestionDao;
import com.monsource.bis.blank.model.Choice;
import com.monsource.bis.blank.model.MetaData;
import com.monsource.bis.data.entity.ChoiceEntity;
import com.monsource.bis.data.entity.QuestionEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by nasanjargal on 6/30/14.
 */
@Service
public class QuestionService {

    @Autowired
    QuestionDao questionDao;

    public List<MetaData> getMetaData(String blankId) {
        List<QuestionEntity> questionEntities = questionDao.findWithoutGroup(blankId);
        ArrayList<MetaData> metaDatas = new ArrayList<>();
        for (QuestionEntity questionEntity : questionEntities) {
            ArrayList<Choice> choices = new ArrayList<>();
            for (ChoiceEntity choiceEntity : questionEntity.getChoices())
                choices.add(new Choice(choiceEntity.getId(), choiceEntity.getCode(), choiceEntity.getText()));
            metaDatas.add(new MetaData(questionEntity.getId(), questionEntity.getCode(), questionEntity.getText(), questionEntity.getType(), questionEntity.getFormat(), choices));
        }
        return metaDatas;

    }
}
