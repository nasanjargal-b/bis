package com.monsource.bis.core.security;

import org.springframework.security.core.GrantedAuthority;

public class AuthAuthority implements GrantedAuthority {


    private Role role;

    public AuthAuthority() {

    }

    /**
     * @param role
     */
    public AuthAuthority(Role role) {
        this.role = role;
    }

    public Role getRole() {
        return this.role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    @Override
    public String getAuthority() {
        return this.getRole().toString();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        AuthAuthority that = (AuthAuthority) o;

        if (role != that.role) return false;

        return true;
    }

    @Override
    public int hashCode() {
        return role != null ? role.hashCode() : 0;
    }
}