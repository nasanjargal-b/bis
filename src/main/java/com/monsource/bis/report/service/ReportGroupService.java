package com.monsource.bis.report.service;

import com.monsource.bis.data.entity.ReportEntity;
import com.monsource.bis.data.entity.ReportGroupEntity;
import com.monsource.bis.report.dao.*;
import com.monsource.bis.report.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ReportGroupService {

    @Autowired
    ReportGroupDao reportGroupDao;
    @Autowired
    ReportFileService reportFileSrv;

    /**
     * @param group
     */
    public void save(Group group) {
        ReportGroupEntity entity;
        if (group.getId() != null)
            entity = reportGroupDao.get(group.getId());
        else
            entity = new ReportGroupEntity();

        entity.setId(group.getId());
        entity.setName(group.getName());
        entity.setOrder(0);

        if (group.getParentId() == null)
            entity.setParentGroup(null);
        else
            entity.setParentGroup(reportGroupDao.get(group.getParentId()));

        reportGroupDao.merge(entity);
    }

    /**
     * @param id
     */
    public void delete(Integer id) {
        ReportGroupEntity entity = reportGroupDao.get(id);

        List<String> files = new ArrayList<>();
        for (ReportEntity report : entity.getReports()) {
            files.add(report.getFile());
        }
        reportGroupDao.delete(entity);

        for (String file : files) {
            reportFileSrv.deleteReportFile(file);
        }
    }

}