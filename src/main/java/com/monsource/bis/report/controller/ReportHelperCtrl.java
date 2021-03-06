package com.monsource.bis.report.controller;

import com.monsource.bis.blank.model.QuestionType;
import com.monsource.bis.core.json.JsonData;
import com.monsource.bis.data.entity.BlankEntity;
import com.monsource.bis.data.entity.ChoiceEntity;
import com.monsource.bis.data.entity.QuestionEntity;
import com.monsource.bis.report.dao.ReportBlankDao;
import com.monsource.bis.report.dao.ReportCityDao;
import com.monsource.bis.report.dao.ReportDistrictDao;
import com.monsource.bis.report.dao.ReportResearchDao;
import com.monsource.bis.report.model.Blank;
import com.monsource.bis.report.model.Choice;
import com.monsource.bis.report.model.Question;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;

/**
 * Created by nasanjargal on 7/7/14.
 */
@Controller
@RequestMapping("/report-mod/helper")
public class ReportHelperCtrl {

    @Autowired
    ReportBlankDao blankDao;

    @Autowired
    ReportResearchDao researchDao;
    @Autowired
    ReportCityDao cityDao;
    @Autowired
    ReportDistrictDao districtDao;

    @RequestMapping("blank.json")
    @ResponseBody
    public JsonData getBlank(String id) {
        BlankEntity blankEntity = blankDao.get(id);


        Blank blank = new Blank(blankEntity.getId(), blankEntity.getName());

        blank.setQuestions(new ArrayList<Question>());

        for (QuestionEntity questionEntity : blankEntity.getQuestions()) {
            if (questionEntity.getType() == QuestionType.GROUP) continue;

            Question question = new Question(
                    questionEntity.getId(),
                    questionEntity.getCode(),
                    questionEntity.getText(),
                    questionEntity.getType()
            );

            switch (questionEntity.getType()) {
                case MULTIPLE_CHOICE:
                case SINGLE_CHOICE:
                    question.setChoices(new ArrayList<Choice>());
                    for (ChoiceEntity choiceEntity : questionEntity.getChoices()) {
                        question.getChoices().add(new Choice(choiceEntity.getId(), choiceEntity.getCode(), choiceEntity.getText()));
                    }
                    break;
            }

            blank.getQuestions().add(question);
        }

        return new JsonData(blank);
    }

    @RequestMapping("blanks.json")
    @ResponseBody
    public JsonData getBlanks() {
        return new JsonData(blankDao.findAll());
    }

    @RequestMapping("researches.json")
    @ResponseBody
    public JsonData getResearches() {
        return new JsonData(researchDao.findAll());
    }

    @RequestMapping("cities.json")
    @ResponseBody
    public JsonData getCities() {
        return new JsonData(cityDao.findAll());
    }

    @RequestMapping("districts.json")
    @ResponseBody
    public JsonData getDistricts() {
        return new JsonData(districtDao.findAll());
    }

}
