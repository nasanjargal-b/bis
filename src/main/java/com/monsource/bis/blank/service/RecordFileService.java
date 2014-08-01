package com.monsource.bis.blank.service;

import com.monsource.bis.blank.dao.ChoiceDao;
import com.monsource.bis.blank.dao.RecordDao;
import com.monsource.bis.blank.exception.NotXlsxFileException;
import com.monsource.bis.blank.exception.QuestionCodeNotMatchException;
import com.monsource.bis.blank.exception.QuestionCodeRowIsEmptyException;
import com.monsource.bis.blank.exception.UnknownCellValueException;
import com.monsource.bis.blank.model.Choice;
import com.monsource.bis.blank.model.MetaData;
import com.monsource.bis.blank.model.QuestionType;
import com.monsource.bis.blank.model.Record;
import com.monsource.bis.core.exception.BaseException;
import com.monsource.bis.data.entity.ChoiceEntity;
import com.monsource.bis.data.entity.QuestionEntity;
import net.sf.dynamicreports.report.exception.DRException;
import org.apache.commons.lang.StringUtils;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

import static net.sf.dynamicreports.report.builder.DynamicReports.*;
import static net.sf.dynamicreports.report.builder.DynamicReports.stl;

/**
 * Created by nasanjargal on 7/3/14.
 */
@Service
public class RecordFileService {

    @Autowired
    RecordDao recordDao;
    @Autowired
    RecordService recordSrv;
    @Autowired
    QuestionService questionSrv;
    @Autowired
    ChoiceDao choiceDao;

    public InputStream downloadXlsx(String blankId, Integer researchId, Integer districtId) throws DRException, IOException {

        List<MetaData> metaDatas = questionSrv.getMetaData(blankId);
        List<Record> records = getRecords(blankId, researchId, districtId);

        Workbook workbook = new XSSFWorkbook();

        Sheet sheet = workbook.createSheet("Бичлэг");
        int rowIndex = 1;
        Row nameRow = sheet.createRow(rowIndex++);
        Row row = sheet.createRow(rowIndex++);

        Font metaFont = workbook.createFont();
        Font nameFont = workbook.createFont();
        CellStyle metaStyle = workbook.createCellStyle();
        CellStyle nameStyle = workbook.createCellStyle();

        metaFont.setFontHeightInPoints((short) 9);

        nameFont.setFontHeightInPoints((short) 9);
        nameFont.setBoldweight(Font.BOLDWEIGHT_BOLD);

        metaStyle.setFont(metaFont);
        metaStyle.setAlignment(CellStyle.ALIGN_CENTER);
        metaStyle.setVerticalAlignment(CellStyle.VERTICAL_CENTER);
        metaStyle.setBorderTop(CellStyle.BORDER_THIN);
        metaStyle.setBorderBottom(CellStyle.BORDER_DOUBLE);

        nameStyle.setFont(nameFont);
        nameStyle.setAlignment(CellStyle.ALIGN_CENTER);
        nameStyle.setVerticalAlignment(CellStyle.VERTICAL_CENTER);
        nameStyle.setBorderTop(CellStyle.BORDER_THIN);
        nameStyle.setBorderBottom(CellStyle.BORDER_THIN);

        int i = 0;
        for (MetaData metaData : metaDatas) {
            Cell metaCell = row.createCell(i);
            Cell nameCell = nameRow.createCell(i++);

            metaCell.setCellValue(metaData.getCode());
            metaCell.setCellStyle(metaStyle);

            String text = metaData.getText();

            if (metaData.getChoices() != null && metaData.getChoices().size() > 0) {
                List<String> choiceTexts = new ArrayList<>();
                for (Choice choice : metaData.getChoices()) {
                    choiceTexts.add(choice.getCode() + "=" + choice.getText());
                }
                text += " \n/" + StringUtils.join(choiceTexts, ", ") + "/";
            }

            nameCell.setCellValue(text);
            nameCell.setCellStyle(nameStyle);
        }

        Font recordFont = workbook.createFont();
        recordFont.setFontHeightInPoints((short) 9);

        CellStyle recordStyle = workbook.createCellStyle();
        recordStyle.setFont(recordFont);

        for (Record record : records) {
            row = sheet.createRow(rowIndex++);
            i = 0;
            for (MetaData metaData : metaDatas) {
                Cell recordCell = row.createCell(i++);
                recordCell.setCellStyle(recordStyle);
                Object data = record.get(metaData.getCode());

                if (data instanceof List) {
                    data = StringUtils.join((Collection) data, ", ");
                    System.out.println(data);
                }

                if (data instanceof String)
                    recordCell.setCellValue((String) data);
                else if (data instanceof Date)
                    recordCell.setCellValue((Date) data);
                else if (data instanceof Boolean)
                    recordCell.setCellValue((Boolean) data);
                else if (data instanceof Number)
                    recordCell.setCellValue(((Number) data).doubleValue());


            }
        }

        i = 0;
        for (MetaData metaData : metaDatas) {
            sheet.autoSizeColumn(i++);
        }

        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        workbook.write(outputStream);

        return new ByteArrayInputStream(outputStream.toByteArray());
    }

    private List<Record> getRecords(String blankId, Integer researchId, Integer districtId) {
        List<Record> records = recordDao.find(blankId, researchId, districtId, true);
        return records;
    }


    public void uploadXlsx(String blankId, Integer researchId, Integer districtId, Integer codeRow, MultipartFile file) throws IOException, ParseException {
        Workbook workbook = getWorkbook(file);
        List<MetaData> metaDatas = questionSrv.getMetaData(blankId);

        Sheet sheet = workbook.getSheetAt(0);
        FormulaEvaluator evaluator = workbook.getCreationHelper().createFormulaEvaluator();
        evaluator.evaluateAll();
        Map<Integer, MetaData> codes = getCodes(sheet.getRow(codeRow - 1), metaDatas);

        List<Record> records = new ArrayList<>();

        for (Row row : sheet) {
            if (row.getRowNum() < codeRow) continue;
            Record record = getRecord(row, codes);

            records.add(record);
        }

        recordSrv.save(blankId, researchId, districtId, records);

    }

    private Record getRecord(Row row, Map<Integer, MetaData> codes) throws ParseException {
        Record record = new Record();

        for (Integer colIndex : codes.keySet()) {
            MetaData metaData = codes.get(colIndex);
            Cell cell = row.getCell(colIndex);
            if (cell == null) continue;
            cell.setCellType(Cell.CELL_TYPE_STRING);

            String cellValue = cell.getStringCellValue();
            Object value = null;
            try {

                if (cellValue != null && !cellValue.equals("")) {
                    switch (metaData.getType()) {
                        case TEXT:
                            value = cellValue;
                            break;
                        case NUMERIC:
                            value = Double.valueOf(cellValue);
                            break;
                        case SINGLE_CHOICE:
                            ChoiceEntity choiceSingle = choiceDao.getChoice(metaData.getId(), cellValue);
                            if (choiceSingle == null)
                                throw new UnknownCellValueException(cell.getRowIndex() + 1, cell.getColumnIndex() + 1);
                            value = choiceSingle.getId();
                            break;
                        case MULTIPLE_CHOICE:
                            List<Integer> ids = new ArrayList<>();
                            for (String code : cellValue.replaceAll(" ", "").split(",")) {
                                ChoiceEntity choiceMultiple = choiceDao.getChoice(metaData.getId(), code);
                                if (choiceMultiple == null)
                                    throw new UnknownCellValueException(cell.getRowIndex() + 1, cell.getColumnIndex() + 1);
                                ids.add(choiceMultiple.getId());
                            }
                            value = ids;
                            break;
                        case TIME:
                        case DATE:
                            DateFormat df;
                            if (metaData.getType() == QuestionType.TIME) {
                                df = new SimpleDateFormat("HH:mm:ss");
                            } else {
                                df = new SimpleDateFormat("yyyy-MM-dd");
                            }
                            try {
                                value = Double.valueOf(cellValue);
                            } catch (NumberFormatException e) {
                                value = df.parse(cellValue).getTime();
                            }
                            break;
                    }

                }
            } catch (BaseException e) {
                throw e;
            } catch (Exception e) {
                e.printStackTrace();
                throw new UnknownCellValueException(cell.getRowIndex() + 1, cell.getColumnIndex() + 1);
            }
            record.put(metaData.getCode(), value);
        }

        return record;
    }

    private Map<Integer, MetaData> getCodes(Row row, List<MetaData> metaDatas) {
        HashMap<Integer, MetaData> codes = new HashMap<>();

        for (Cell cell : row) {
            cell.setCellType(Cell.CELL_TYPE_STRING);
            String code = cell.getStringCellValue();
            if (code != null && !code.equals("")) {
                boolean isMatch = false;
                for (MetaData meta : metaDatas) {
                    if (code.toUpperCase().equals(meta.getCode().toUpperCase())) {
                        isMatch = true;
                        codes.put(cell.getColumnIndex(), meta);
                        break;
                    }
                }
                if (!isMatch) {
                    throw new QuestionCodeNotMatchException(code);
                }
            }
        }

        if (codes.isEmpty()) {
            throw new QuestionCodeRowIsEmptyException(row.getRowNum() + 1);
        }

        return codes;
    }

    private Workbook getWorkbook(MultipartFile file) {
        try {
            return new XSSFWorkbook(file.getInputStream());
        } catch (Exception e) {
            try {
                return new HSSFWorkbook(file.getInputStream());
            } catch (Exception e1) {

            }
        }

        throw new NotXlsxFileException();
    }
}
