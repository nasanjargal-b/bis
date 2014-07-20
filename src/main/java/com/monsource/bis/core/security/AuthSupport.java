package com.monsource.bis.core.security;

import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.authentication.InternalAuthenticationServiceException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

@Component
public class AuthSupport {

    public AuthDetails getAuthDetails() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (principal instanceof AuthDetails) {
            return (AuthDetails) principal;
        }

        throw new InternalAuthenticationServiceException("User not signed in!!!");
    }

    /**
     * @param role
     */
    public boolean checkAuthority(Role role) {
        for (AuthAuthority authAuthority : this.getAuthDetails().getAuthorities()) {
            if (authAuthority.getRole().equals(role)) {
                return true;
            }
        }

        return false;
    }

    /**
     * @param roleName
     */
    public boolean checkAuthority(String roleName) {
        Role role = Role.valueOf(roleName);
        for (AuthAuthority authAuthority : this.getAuthDetails().getAuthorities()) {
            if (authAuthority.getRole().equals(role)) {
                return true;
            }
        }

        return false;
    }

    public boolean isAuthenticated() {
        try {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

            if (authentication == null || authentication instanceof AnonymousAuthenticationToken) {
                return false;
            }

            return true;

        } catch (Throwable e) {
            e.printStackTrace();
            return false;
        }
    }

}