package com.monsource.bis.blank.controller;

import com.monsource.bis.blank.dao.QuestionDao;
import com.monsource.bis.blank.service.QuestionService;
import com.monsource.bis.core.json.JsonData;
import com.monsource.bis.data.entity.QuestionEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * Created by nasanjargal on 6/27/14.
 */
@Controller
@RequestMapping("/blank-mod/record")
public class RecordMetaCtrl {

    @Autowired
    QuestionService questionSrv;

    @RequestMapping("meta.json")
    @ResponseBody
    public JsonData meta(String blankId) {
        return new JsonData(questionSrv.getMetaData(blankId));
    }
}
