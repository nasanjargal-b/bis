package com.monsource.bis.core.exception;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.monsource.bis.blank.exception.UnknownCellValueException;
import com.monsource.bis.core.json.JsonData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.context.support.ResourceBundleMessageSource;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.context.WebApplicationContext;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.util.Enumeration;
import java.util.Locale;

/**
 * Created by nasanjargal on 5/30/14.
 */
@Controller
public class ExceptionController {

    @Autowired
    ResourceBundleMessageSource resourceBundle;
    @Autowired
    ObjectMapper objectMapper;

    @RequestMapping("/error/exception")
    public void exception(HttpServletRequest request, HttpServletResponse response) throws IOException {

        Exception ex = (Exception) request.getAttribute("javax.servlet.error.exception");

        Locale locale = LocaleContextHolder.getLocale();

        JsonData jsonData = null;

        if (ex instanceof BaseException) {

            if (ex instanceof UnknownCellValueException) {
                UnknownCellValueException uex = (UnknownCellValueException) ex;
                if (uex.getCause() != null)
                    uex.setParams(resourceBundle.getMessage("core." + uex.getCause().getClass().getSimpleName(), uex.getCause().getParams(), locale));
            }

            BaseException e = (BaseException) ex;
            jsonData = new JsonData(false, resourceBundle.getMessage("core." + e.getClass().getSimpleName(), e.getParams(), locale));
        } else {
            Throwable temp = ex;
            while (temp.getCause() != null) {
                temp = temp.getCause();
                if (temp instanceof BaseException) {
                    break;
                }
            }

            if (temp instanceof BaseException) {
                BaseException e = (BaseException) temp;
                jsonData = new JsonData(false, resourceBundle.getMessage("core." + e.getClass().getSimpleName(), e.getParams(), locale));
            } else {
                jsonData = new JsonData(false, resourceBundle.getMessage("core.Exception", new Object[]{ex.getMessage()}, locale));
            }

        }


        ex.printStackTrace();

        response.setContentType("application/json;charset=utf-8");

        response.getWriter().print(objectMapper.writeValueAsString(jsonData));

    }

}
