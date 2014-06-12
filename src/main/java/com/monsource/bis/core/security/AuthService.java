package com.monsource.bis.core.security;

import com.monsource.bis.core.exception.AccessDeniedBaseException;
import org.hibernate.HibernateException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashSet;

@Service
@Transactional
public class AuthService implements UserDetailsService, AccessDeniedHandler {

    @Autowired
    AuthDao authDao;
    @Autowired
    AuthSupport authSupport;

    public void setAuthDao(AuthDao authDao) {
        this.authDao = authDao;
    }

    /**
     * @param username
     */
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        try {
            AuthDetails authDetails = authDao.find(username);
            if (authDetails == null) {
                throw new UsernameNotFoundException("Username not found!!!");
            }
            return authDetails;
        } catch (HibernateException e) {
            throw new UsernameNotFoundException(e.getMessage(), e);
        }
    }

    @Override
    public void handle(HttpServletRequest request, HttpServletResponse response, AccessDeniedException accessDeniedException) throws IOException, ServletException {
        if (authSupport.getAuthDetails() == null) {
            response.sendRedirect("/security/login.html");
        }else{
            throw new AccessDeniedBaseException();
        }
    }
}