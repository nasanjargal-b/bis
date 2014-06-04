package com.monsource.bis.account.controller;

import com.monsource.bis.account.dao.CityDao;
import com.monsource.bis.account.dao.DistrictDao;
import com.monsource.bis.core.json.JsonData;
import com.monsource.bis.data.entity.type.AccountStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by nyamaa on 6/3/14.
 */
@Controller
@RequestMapping("/account-mod/account")
public class DistrictCtrl {

    @Autowired
    DistrictDao dao;

    @RequestMapping(value = "district.json")
    @ResponseBody
    public JsonData read(Integer cityId) {
        JsonData jsonData = new JsonData();
        jsonData.setData(dao.find(cityId));
        return jsonData;
    }
}
