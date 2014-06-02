package com.monsource.bis.blank.controller;

import com.monsource.bis.blank.service.*;
import com.monsource.bis.blank.dao.*;
import com.monsource.bis.core.json.*;
import com.monsource.bis.blank.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.xml.bind.JAXBException;
import java.util.List;

@Controller
@RequestMapping("/blank-mod/blank")
public class BlankCtrl {

    @Autowired
    BlankService blankSrv;
    @Autowired
    BlankDao blankDao;

    /**
     * @param text
     * @param groupId
     */
    @RequestMapping(value = "blanks.json", method = RequestMethod.GET)
    @ResponseBody
    public JsonData getList(String text, String groupId) {
        return new JsonData(blankDao.find(text, groupId));
    }

    /**
     * @param id
     */
    @RequestMapping(value = "blank.json", method = RequestMethod.GET)
    @ResponseBody
    public JsonData get(String id) throws JAXBException {
        return new JsonData(blankSrv.get(id));
    }

    /**
     * @param blank
     */
    @Transactional
    @RequestMapping(value = "blank.json", method = RequestMethod.POST)
    @ResponseBody
    public JsonData save(Blank blank) throws JAXBException {
        blankSrv.save(blank);
        return new JsonData(true);
    }

    /**
     * @param ids
     */
    @Transactional
    @RequestMapping(value = "blank.json", method = RequestMethod.DELETE)
    @ResponseBody
    public JsonData delete(List<String> ids) {
        blankSrv.delete(ids);
        return new JsonData(true);
    }

}