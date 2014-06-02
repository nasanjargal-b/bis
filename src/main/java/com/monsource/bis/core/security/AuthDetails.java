package com.monsource.bis.core.security;

import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

public class AuthDetails implements UserDetails {

    private Integer id;
    private String username;
    private String password;
    private String salt;
    private boolean accountNonExpired;
    private boolean accountNonLocked;
    private boolean credentialsNonExpired;
    private boolean enabled;
    private Collection<AuthAuthority> authorities;

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

	public String getUsername() {
		return this.username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getSalt() {
		return this.salt;
	}

	public void setSalt(String salt) {
		this.salt = salt;
	}

	public boolean isAccountNonExpired() {
		return this.accountNonExpired;
	}

	public void setAccountNonExpired(boolean accountNonExpired) {
		this.accountNonExpired = accountNonExpired;
	}

	public boolean isAccountNonLocked() {
		return this.accountNonLocked;
	}

	public void setAccountNonLocked(boolean accountNonLocked) {
		this.accountNonLocked = accountNonLocked;
	}

	public boolean isCredentialsNonExpired() {
		return this.credentialsNonExpired;
	}

	public void setCredentialsNonExpired(boolean credentialsNonExpired) {
		this.credentialsNonExpired = credentialsNonExpired;
	}

	public boolean isEnabled() {
		return this.enabled;
	}

	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}

	public Collection<AuthAuthority> getAuthorities() {
		return this.authorities;
	}

	public void setAuthorities(Collection<AuthAuthority> authorities) {
		this.authorities = authorities;
	}

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        AuthDetails that = (AuthDetails) o;

        if (accountNonExpired != that.accountNonExpired) return false;
        if (accountNonLocked != that.accountNonLocked) return false;
        if (credentialsNonExpired != that.credentialsNonExpired) return false;
        if (enabled != that.enabled) return false;
        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (password != null ? !password.equals(that.password) : that.password != null) return false;
        if (salt != null ? !salt.equals(that.salt) : that.salt != null) return false;
        if (username != null ? !username.equals(that.username) : that.username != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (username != null ? username.hashCode() : 0);
        result = 31 * result + (password != null ? password.hashCode() : 0);
        result = 31 * result + (salt != null ? salt.hashCode() : 0);
        result = 31 * result + (accountNonExpired ? 1 : 0);
        result = 31 * result + (accountNonLocked ? 1 : 0);
        result = 31 * result + (credentialsNonExpired ? 1 : 0);
        result = 31 * result + (enabled ? 1 : 0);
        return result;
    }
}