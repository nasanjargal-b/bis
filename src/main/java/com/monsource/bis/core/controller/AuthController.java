package com.monsource.bis.core.controller;

import com.monsource.bis.core.json.JsonData;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletResponse;

/**
 * Created by nasanjargal on 7/20/14.
 */
@Controller
public class AuthController {

    @RequestMapping("/security/error.json")
    @ResponseBody
    public JsonData error(HttpServletResponse response) {
        response.setStatus(401);
        return new JsonData(false, "Таны хандах эрх хүрсэнгүй!!!");
    }

}
