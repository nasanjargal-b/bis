package com.monsource.bis.blank.service;

import com.monsource.bis.blank.dao.BlankCityDao;
import com.monsource.bis.blank.excel.ExcelColumn;
import com.monsource.bis.blank.excel.ExcelWorkbook;
import com.monsource.bis.blank.model.Blank;
import com.monsource.bis.blank.model.ColumnType;
import com.monsource.bis.blank.model.Question;
import com.monsource.bis.blank.model.Record;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.IndexedColors;
import org.apache.poi.xssf.usermodel.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.xml.bind.JAXBException;
import java.awt.*;
import java.io.IOException;
import java.io.InputStream;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by nasanjargal on 6/6/14.
 */
@Service
public class RecordFileService {

    @Autowired
    QuestionService questionSrv;
    @Autowired
    BlankService blankSrv;
    @Autowired
    BlankCityDao cityDao;
    @Autowired
    RecordService recordSrv;

    public void save(String blankId, Integer researchId, InputStream inputStream) throws IOException, JAXBException, ParseException {

        Blank blank = blankSrv.get(blankId);
        ExcelWorkbook excelWorkbook = new ExcelWorkbook(blank, getColumns(questionSrv.getColumnsWithoutGroup(blank.getQuestions())), inputStream, cityDao.findAll());

        List<Record> records = excelWorkbook.getRecords();

        for (Record record : records) {
            recordSrv.save(blankId, researchId, record);
        }

    }

    public XSSFWorkbook getWorkBook(String blankId) throws JAXBException {

        Blank blank = blankSrv.get(blankId);
        List<Question> questions = questionSrv.getColumnsWithoutGroup(blank.getQuestions());

        List<ExcelColumn> columns = getColumns(questions);

        return new ExcelWorkbook(columns, blank);

    }


    private List<ExcelColumn> getColumns(List<Question> questions) {
        ArrayList<ExcelColumn> columns = new ArrayList<>();

        columns.add(new ExcelColumn((short) 150, "#", "ID", true));

        for (Question question : questions) {
            columns.add(new ExcelColumn((short) 300, question.getText(), question.getId().toUpperCase(), false, question.getType()));
        }

        columns.add(new ExcelColumn((short) 250, "Аймаг/Хот", "CITY", true));
        columns.add(new ExcelColumn((short) 250, "Сум/Дүүрэг", "DISTRICT", true));
        columns.add(new ExcelColumn((short) 300, "Тайлбар", "DESC", true));
        columns.add(new ExcelColumn((short) 300, "Ажилтан", "WORKER", true));
        columns.add(new ExcelColumn((short) 300, "Албан тушаал", "POSITION", true));
        columns.add(new ExcelColumn((short) 300, "Утас", "PHONE", true));
        columns.add(new ExcelColumn((short) 300, "Бүртгэсэн огноо", "DATE", true, ColumnType.DATE));
        columns.add(new ExcelColumn((short) 300, "Мэдээллийг авсан судлаач", "RESEARCHER", true));

        return columns;
    }


}
