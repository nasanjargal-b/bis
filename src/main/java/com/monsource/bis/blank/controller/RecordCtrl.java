package com.monsource.bis.blank.controller;

import com.monsource.bis.blank.dao.*;
import com.monsource.bis.core.json.*;
import com.monsource.bis.blank.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;

import com.monsource.bis.blank.service.*;
import org.springframework.web.servlet.ModelAndView;

import javax.xml.bind.JAXBException;

@Controller
@RequestMapping("/blank-mod/record")
public class RecordCtrl {

    @Autowired
    BlankCityDao blankCityDao;
    @Autowired
    BlankService blankSrv;
    @Autowired
    QuestionService questionSrv;
    @Autowired
    RecordDao recordDao;
    @Autowired
    RecordService recordSrv;

    @RequestMapping("grid.js")
    public ModelAndView gridView(String blankId, Integer researchId) throws JAXBException {
        Blank blank = blankSrv.get(blankId);
        List<Question> questions = questionSrv.getColumnsWithoutGroup(blank.getQuestions());
        List<Question> columnQuestions = new ArrayList<>();
        for (Question question : questions) {
            if (question.isGrid()) columnQuestions.add(question);
        }

        ModelAndView mav = new ModelAndView("/recordGrid.js");

        mav.addObject("questions", columnQuestions);
        mav.addObject("blankId", blankId);
        mav.addObject("researchId", researchId);

        return mav;

    }

    @RequestMapping("edit.js")
    public ModelAndView editView(@RequestParam String blankId, @RequestParam Integer researchId) throws JAXBException {
        Blank blank = blankSrv.get(blankId);

        ModelAndView mav = new ModelAndView("/recordEdit.js");

        mav.addObject("blank", blank);
        mav.addObject("researchId", researchId);

        return mav;

    }

    @RequestMapping(value = "cities.json", method = RequestMethod.GET)
    @ResponseBody
    public JsonData getCities() {
        return new JsonData(blankCityDao.findAll());
    }

    /**
     * @param blankId
     * @param start
     * @param limit
     */
    @RequestMapping(value = "records.json", method = RequestMethod.GET)
    @ResponseBody
    public JsonData getList(@RequestParam String blankId, @ModelAttribute RecordFilter filter, Integer start, Integer limit) throws JAXBException {
        Map<String, Object> result = recordDao.find(blankId, start, limit, filter);
        return new JsonData((Collection) result.get("records"), (int) result.get("total"));
    }

    /**
     * @param record
     */
    @Transactional
    @RequestMapping(value = "record.json", method = RequestMethod.POST)
    @ResponseBody
    public JsonData save(@RequestParam String blankId, @RequestParam Integer researchId, @RequestBody Record record) throws JAXBException, ParseException {
        recordSrv.save(blankId, researchId, record);
        return new JsonData(true);
    }

    /**
     * @param ids
     */
    @Transactional
    @RequestMapping(value = "record.json", method = RequestMethod.DELETE)
    @ResponseBody
    public JsonData delete(@RequestParam String blankId, @RequestParam Integer researchId, @RequestBody List<Integer> ids) throws JAXBException {
        recordSrv.delete(blankId, ids);
        return new JsonData(true);
    }

}