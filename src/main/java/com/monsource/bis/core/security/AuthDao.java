package com.monsource.bis.core.security;

import org.springframework.stereotype.Repository;

public interface AuthDao {

    /**
     * @param username
     */
    public AuthDetails find(String username);

}