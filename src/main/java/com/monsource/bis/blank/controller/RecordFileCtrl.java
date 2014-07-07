package com.monsource.bis.blank.controller;

import com.monsource.bis.blank.service.RecordFileService;
import com.monsource.bis.core.json.JsonData;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by nasanjargal on 7/3/14.
 */
@Controller
@RequestMapping("/blank-mod/record")
public class RecordFileCtrl {

    @Autowired
    RecordFileService recordFileSrv;

    @RequestMapping(value = "file.json", method = RequestMethod.POST)
    @ResponseBody
    public JsonData upload(@RequestParam String blankId, @RequestParam Integer researchId, @RequestParam Integer districtId, @RequestParam Integer codeRow, MultipartFile file) throws IOException, ParseException {
        if (file.isEmpty())
            return new JsonData(false, "Файл илгээгдээгүй байна!!!");
        recordFileSrv.uploadXlsx(blankId, researchId, districtId, codeRow, file);
        return new JsonData(true);
    }

    @RequestMapping(value = "file.xlsx", method = RequestMethod.GET)
    public void download(@RequestParam String blankId, @RequestParam Integer researchId, @RequestParam Integer districtId, HttpServletResponse response) throws Exception {
        InputStream xlsx = recordFileSrv.downloadXlsx(blankId, researchId, districtId);


        DateFormat df = new SimpleDateFormat("yyyyMMddHHssmm");

        response.setContentType("application/octet-stream");
        response.setHeader("Content-Disposition", "attachment;filename=record_" + df.format(new Date()) + ".xlsx");

        IOUtils.copy(xlsx, response.getOutputStream());
    }

}
