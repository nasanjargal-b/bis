package com.monsource.bis.blank.controller;

import com.monsource.bis.blank.exception.NotXlsxFileException;
import com.monsource.bis.blank.service.BlankService;
import com.monsource.bis.blank.service.RecordFileService;
import com.monsource.bis.core.json.JsonData;
import org.apache.poi.POIXMLException;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import javax.xml.bind.JAXBException;
import java.io.IOException;

/**
 * Created by nasanjargal on 6/6/14.
 */

@Controller
@RequestMapping("/blank-mod/record/file")
public class RecordFileCtrl {

    @Autowired
    BlankService blankSrv;
    @Autowired
    RecordFileService recordFileSrv;

    @Transactional
    @RequestMapping("upload.json")
    @ResponseBody
    public JsonData upload(@RequestParam String blankId, @RequestParam Integer researchId, @RequestParam("file") MultipartFile file) throws JAXBException {

        try {
            recordFileSrv.save(blankId, researchId, file.getInputStream());
        } catch (POIXMLException e) {
            throw new NotXlsxFileException();
        } catch (IOException e) {
            NotXlsxFileException notXlsxFileException = new NotXlsxFileException();
            notXlsxFileException.addSuppressed(e);
            throw notXlsxFileException;
        }
        return new JsonData(true);
    }

    @RequestMapping("download.xlsx")
    public void donwload(@RequestParam String blankId, HttpServletResponse response) throws IOException, JAXBException {
        response.setContentType("application/xlsx");

        XSSFWorkbook workbook = recordFileSrv.getWorkBook(blankId);
        response.setHeader("Content-Disposition", "attachment; filename=" + blankId + ".xlsx");
        workbook.write(response.getOutputStream());
        response.getOutputStream().flush();

    }

}
