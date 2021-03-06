package com.monsource.bis.blank.controller;

import com.monsource.bis.blank.model.Record;
import com.monsource.bis.blank.service.RecordService;
import com.monsource.bis.core.json.JsonData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.support.TransactionCallback;
import org.springframework.transaction.support.TransactionTemplate;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by nasanjargal on 6/30/14.
 */
@Controller
@RequestMapping("/blank-mod/record")
public class RecordDataCtrl {

    @Autowired
    TransactionTemplate template;
    @Autowired
    RecordService recordSrv;

    @RequestMapping(value = "records.json", method = RequestMethod.GET)
    @ResponseBody
    public JsonData get(@RequestParam String blankId, @RequestParam final Integer researchId, @RequestParam Integer districtId) {
        return new JsonData(recordSrv.getRecords(blankId, researchId, districtId));
    }

    @RequestMapping(value = "records.json", method = RequestMethod.POST)
    @ResponseBody
    @Transactional
    public JsonData save(@RequestParam String blankId, @RequestParam Integer researchId, @RequestParam Integer districtId, @RequestBody List<Record> records) throws ParseException {
        recordSrv.save(blankId, researchId, districtId, records);
        return new JsonData(true);
    }

    @RequestMapping(value = "records.json", method = RequestMethod.DELETE)
    @Transactional
    @ResponseBody
    public JsonData delete(String blankId, @RequestBody final List<Record> records) {
        recordSrv.delete(blankId, records);
        return new JsonData(true);
    }
}