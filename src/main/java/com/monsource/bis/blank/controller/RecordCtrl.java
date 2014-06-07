package com.monsource.bis.blank.controller;

import com.monsource.bis.blank.dao.*;
import com.monsource.bis.core.json.*;
import com.monsource.bis.blank.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.List;

import com.monsource.bis.blank.service.*;

import javax.xml.bind.JAXBException;

@Controller
@RequestMapping("/blank-mod/record")
public class RecordCtrl {

    @Autowired
    BlankCityDao blankCityDao;
    @Autowired
    RecordDao recordDao;
    @Autowired
    RecordService recordSrv;

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
    public JsonData getList(@RequestParam String blankId, @RequestParam Integer researchId, Integer start, Integer limit) throws JAXBException {
        return new JsonData(recordDao.find(blankId, researchId, start, limit));
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