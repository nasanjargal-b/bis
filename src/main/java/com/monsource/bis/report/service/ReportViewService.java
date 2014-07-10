package com.monsource.bis.report.service;

import com.monsource.bis.data.entity.ReportEntity;
import com.monsource.bis.report.dao.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class ReportViewService {

    @Autowired
    ReportDao reportDao;
    @Autowired
    ReportRecordDao reportRecordDao;

    /**
     * @param id
     */
    public List<Map> calc(Integer id) {
        ReportEntity reportEntity = reportDao.get(id);

        List<Map> data = reportRecordDao.find(reportEntity);

        return data;
    }

}