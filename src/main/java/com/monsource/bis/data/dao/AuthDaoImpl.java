package com.monsource.bis.data.dao;

import com.monsource.bis.core.data.HibernateDaoSupport;
import com.monsource.bis.core.security.AuthAuthority;
import com.monsource.bis.core.security.AuthDao;
import com.monsource.bis.core.security.AuthDetails;
import com.monsource.bis.data.entity.AccountEntity;
import com.monsource.bis.data.entity.GroupEntity;
import com.monsource.bis.data.entity.GroupRoleEntity;
import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import java.util.HashSet;

@Repository
public class AuthDaoImpl extends HibernateDaoSupport<AccountEntity> implements AuthDao {
    @Override
    public AuthDetails find(String username) {
        Criteria criteria = this.getSession().createCriteria(AccountEntity.class);

        criteria.add(Restrictions.eq("username", username));

        AccountEntity accountEntity = (AccountEntity) criteria.uniqueResult();

        if (accountEntity == null) {
            return null;
        }

        AuthDetails authDetails = new AuthDetails();

        authDetails.setId(accountEntity.getId());
        authDetails.setUsername(accountEntity.getUsername());
        authDetails.setPassword(accountEntity.getPassword());
        authDetails.setSalt(accountEntity.getSalt());

        authDetails.setAccountNonExpired(true);
        authDetails.setAccountNonLocked(true);
        authDetails.setCredentialsNonExpired(true);
        authDetails.setEnabled(true);
        switch (accountEntity.getStatus()) {
            case BLOCKED:
                authDetails.setEnabled(false);
                break;
            case LOCKED:
                authDetails.setAccountNonLocked(false);
                break;
            case EXPIRED:
                authDetails.setAccountNonExpired(false);
                break;
        }

        HashSet<AuthAuthority> authorities = new HashSet<AuthAuthority>();

        for (GroupEntity groupEntity : accountEntity.getGroups()) {
            for (GroupRoleEntity groupRoleEntity : groupEntity.getGroupRoles()) {
                authorities.add(new AuthAuthority(groupRoleEntity.getRole()));
            }
        }

        authDetails.setAuthorities(authorities);

        return authDetails;
    }
}
