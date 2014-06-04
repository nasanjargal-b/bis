package com.monsource.bis.blank.controller;

import com.monsource.bis.blank.dao.BlankGroupDao;
import com.monsource.bis.core.json.JsonData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by nasanjargal on 6/2/14.
 */

@Controller
@RequestMapping("/blank-mod/blank")
public class BlankGroupCtrl {


    @Autowired
    BlankGroupDao blankGroupDao;

    /**
     * @param text
     */
    @RequestMapping(value = "groups.json", method = RequestMethod.GET)
    @ResponseBody
    public JsonData getList(String text) {
        return new JsonData(blankGroupDao.find(text));
    }

}
