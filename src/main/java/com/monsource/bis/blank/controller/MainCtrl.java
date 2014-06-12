package com.monsource.bis.blank.controller;

import com.monsource.bis.core.security.AuthAuthority;
import com.monsource.bis.core.security.AuthSupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

/**
 * Created by nyamaa on 6/11/14. todo move
 */
@Controller
@RequestMapping("/main.js")
public class MainCtrl {

    @Autowired
    private AuthSupport authSupport;

    @RequestMapping
    public ModelAndView getMains(){
        ModelAndView mav = new ModelAndView("/mainMenu.js");
        List<String> roles = new ArrayList<String>();
        Collection<AuthAuthority> authorities = authSupport.getAuthDetails().getAuthorities();

        for (AuthAuthority authority : authorities) {
            roles.add(authority.getAuthority());
        }
        mav.addObject("roles", roles);
        return mav;
    }
}
