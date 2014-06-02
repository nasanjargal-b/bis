package com.monsource.bis.core.security;

import org.hibernate.HibernateException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.HashSet;

public class AuthService implements UserDetailsService {

    AuthDao authDao;

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

}