package com.monsource.bis.report.service;

import com.monsource.bis.data.entity.ReportEntity;
import com.monsource.bis.report.dao.*;
import com.monsource.bis.report.model.Column;
import com.monsource.bis.report.model.Report;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.util.List;
import java.util.Map;

@Service
public class ReportViewService {

    @Autowired
    ReportDao reportDao;
    @Autowired
    ReportService reportService;
    @Autowired
    ReportRecordDao reportRecordDao;

    /**
     * @param id
     */
    public List<Map> calc(Integer id) {
        Report report = reportService.get(id);
        return this.calc(report);
    }

    public List<Map> calc(Report report) {
        List<Map> results = reportRecordDao.find(report);

        for (Column column : report.getColumns()) {
            if (column.getPercent()) {
                double total = 0d;
                for (Map result : results) {
                    Object value = result.get(column.getCode());
                    total += ((Number) (value == null ? 0 : value)).doubleValue();
                }

                for (Map result : results) {
                    Object value = result.get(column.getCode());
                    double number = ((Number) (value == null ? 0 : value)).doubleValue();
                    number = number * 100 / total;

                    result.put(column.getCode(), number);
                }
                /*total = 0d;
                for (Map result : results) {
                    Object value = result.get(column.getCode());
                    total += ((Number) value).doubleValue();
                }
                for (Map result : results) {
                    Object value = result.get(column.getCode());
                    double number = ((Number) (value == null ? 0 : value)).doubleValue();
                    number = number * 100 / total;

                    result.put(column.getCode(), Math.round(number));
                }*/

            }
        }

        return results;
    }

}