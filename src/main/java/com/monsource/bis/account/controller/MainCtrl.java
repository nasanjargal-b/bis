package com.monsource.bis.account.controller;

import com.monsource.bis.account.dao.AccountDao;
import com.monsource.bis.core.security.AuthAuthority;
import com.monsource.bis.core.security.AuthSupport;
import com.monsource.bis.data.entity.AccountEntity;
import com.monsource.bis.report.dao.ReportGroupDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.*;

/**
 * Created by nyamaa on 6/11/14. todo move
 */
@Controller
@RequestMapping("/main.js")
public class MainCtrl {

    @Autowired
    private AuthSupport authSupport;
    @Autowired
    private AccountDao accountDao;
    @Autowired
    ReportGroupDao reportGroupDao;

    @RequestMapping
    public ModelAndView getMains() {
        ModelAndView mav = new ModelAndView("/mainMenu.js");
        List<String> roles = new ArrayList<String>();
        Collection<AuthAuthority> authorities = authSupport.getAuthDetails().getAuthorities();
        AccountEntity entity = accountDao.get(authSupport.getAuthDetails().getId());
        for (AuthAuthority authority : authorities) {
            roles.add(authority.getAuthority());
        }
        mav.addObject("name", entity.getName());
        mav.addObject("auth", authSupport);
        mav.addObject("roles", roles);
        mav.addObject("groups", reportGroupDao.find(null));
        return mav;
    }
}
