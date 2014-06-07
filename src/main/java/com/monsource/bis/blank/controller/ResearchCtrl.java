package com.monsource.bis.blank.controller;

import com.monsource.bis.blank.model.Research;
import com.monsource.bis.blank.service.ResearchService;
import com.monsource.bis.core.json.JsonData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by nyamaa on 6/4/14.
 */
@Controller
@RequestMapping("/blank-mod/research")
public class ResearchCtrl {

    @Autowired
    ResearchService researchSrv;

    @RequestMapping("researches.json")
    @ResponseBody
    public JsonData getAll() {
        JsonData data = new JsonData();
        data.setData(researchSrv.getAll());
        return data;
    }

    @RequestMapping(value = "research.json", method = RequestMethod.GET)
    @ResponseBody
    public JsonData get(Integer id) {
        JsonData data = new JsonData();
        data.setData(researchSrv.getModel(id));
        return data;
    }

    @RequestMapping(value = "research.json", method = RequestMethod.POST)
    @ResponseBody
    public JsonData save(@RequestBody Research research) {
        JsonData data = new JsonData();
        researchSrv.save(research);
        return data;
    }

    @RequestMapping(value = "research.json", method = RequestMethod.DELETE)
    @ResponseBody
    public JsonData delete(@RequestBody Research research) {
        JsonData data = new JsonData();
        researchSrv.delete(research.getId());
        return data;
    }
}
