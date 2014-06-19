package com.monsource.bis.report.service;

import com.monsource.bis.data.entity.ReportEntity;
import org.apache.commons.io.IOUtils;
import org.pentaho.reporting.engine.classic.core.MasterReport;
import org.pentaho.reporting.libraries.resourceloader.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.ServletContext;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;

/**
 * Created by nasanjargal on 6/16/14.
 */
@Service
public class ReportFileService {

    private static final String PATH = "/WEB-INF/report/";

    @Autowired
    ServletContext servletContext;

    /**
     * @param name
     */
    public boolean deleteReportFile(String name) {

        File file = new File(servletContext.getRealPath(PATH + name));

        if (file.exists())
            return file.delete();
        return false;
    }

    /**
     * @param name
     * @param file
     */
    public boolean createReportFile(String name, MultipartFile file) {
        try {
            FileOutputStream fos = new FileOutputStream(new File(servletContext.getRealPath(PATH + name)));

            IOUtils.copy(file.getInputStream(), fos);

            fos.close();
            return true;
        } catch (IOException e) {
            e.printStackTrace();
            return false;
        }
    }

    public MasterReport getMasterReport(String file) throws MalformedURLException, ResourceException {
        URL reportDefinitionURL = servletContext.getResource(PATH + file);
        ResourceManager resourceManager = new ResourceManager();
        resourceManager.registerDefaults();
        Resource directly = resourceManager.createDirectly(reportDefinitionURL, MasterReport.class);
        MasterReport report = (MasterReport) directly.getResource();

        return report;
    }
}
