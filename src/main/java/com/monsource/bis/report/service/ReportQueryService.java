package com.monsource.bis.report.service;

import com.monsource.bis.report.dao.ReportRecordDao;
import com.monsource.bis.report.model.Column;
import com.monsource.bis.report.model.Report;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by nasanjargal on 7/23/14.
 */
@Service
public class ReportQueryService {

    @Autowired
    ReportRecordDao recordDao;

    public List<Column> queryMetaData(Report report) {
        List<Column> columns = recordDao.getQueryMetaData(report);
        return columns;
    }
}
