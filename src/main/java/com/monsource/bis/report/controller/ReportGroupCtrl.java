package com.monsource.bis.report.controller;

import com.monsource.bis.report.dao.*;
import com.monsource.bis.core.json.*;
import com.monsource.bis.report.model.*;
import com.monsource.bis.report.service.ReportGroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/report-mod/group")
public class ReportGroupCtrl {

    @Autowired
    ReportGroupDao reportGroupDao;
    @Autowired
    ReportGroupService reportGroupSrv;

    /**
     * @param parentId
     */
    @RequestMapping("groups.json")
    @ResponseBody
    public JsonData get(@RequestParam(value = "node", required = false) Integer parentId) {
        return new JsonData(reportGroupDao.findByParent(parentId));
    }

    /**
     * @param group
     */
    @RequestMapping(value = "group.json", method = RequestMethod.POST)
    @Transactional
    @ResponseBody
    public JsonData save(@RequestBody Group group) {
        group.setParentId(group.getParentId() != null && group.getParentId() == 0 ? null : group.getParentId());
        group.setId(group.getId() != null && group.getId() == 0 ? null : group.getId());
        reportGroupSrv.save(group);

        return new JsonData(true);
    }

    /**
     * @param id
     */
    @RequestMapping(value = "group/{id}.json", method = RequestMethod.DELETE)
    @Transactional
    @ResponseBody
    public JsonData delete(@PathVariable("id") Integer id) {
        reportGroupSrv.delete(id);
        return new JsonData(true);
    }

}