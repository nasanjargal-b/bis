package com.monsource.bis.blank.controller;

import com.monsource.bis.blank.dao.BlankCityDao;
import com.monsource.bis.core.json.JsonData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by nasanjargal on 6/30/14.
 */
@Controller
@RequestMapping("/blank-mod/cities.json")
public class BlankCityCtrl {

    @Autowired
    BlankCityDao cityDao;

    @RequestMapping
    @ResponseBody
    public JsonData cities() {
        return new JsonData(cityDao.findAll());
    }

}
