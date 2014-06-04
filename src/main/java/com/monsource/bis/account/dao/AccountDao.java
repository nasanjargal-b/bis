package com.monsource.bis.account.dao;

import com.monsource.bis.account.model.Account;
import com.monsource.bis.account.model.AccountGrid;
import com.monsource.bis.account.model.Group;
import com.monsource.bis.core.data.HibernateDaoSupport;
import com.monsource.bis.data.entity.AccountEntity;
import com.monsource.bis.data.entity.GroupEntity;
import com.monsource.bis.data.entity.type.AccountStatus;
import org.hibernate.Criteria;
import org.hibernate.criterion.MatchMode;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.hibernate.transform.Transformers;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class AccountDao extends HibernateDaoSupport<AccountEntity> {

    /**
     * @param text
     * @param status
     */
    public List<AccountGrid> find(String text, AccountStatus status) {
        Criteria criteria = getSession().createCriteria(AccountEntity.class);
        criteria.createAlias("district", "district");
        criteria.createAlias("district.city", "city");
        criteria.add(Restrictions.or(
                Restrictions.like("username", text, MatchMode.ANYWHERE),
                Restrictions.like("name", text, MatchMode.ANYWHERE)
        ));
        if (status != null) {
            criteria.add(Restrictions.eq("status", status));
        }
        criteria.setProjection(Projections.projectionList()
                .add(Projections.property("id"), "id")
                .add(Projections.property("username"), "username")
                .add(Projections.property("name"), "name")
                .add(Projections.property("email"), "email")
                .add(Projections.property("phone"), "phone")
                .add(Projections.property("address"), "address")
                .add(Projections.property("gender"), "gender")
                .add(Projections.property("status"), "status")
                .add(Projections.property("district.id"), "districtId")
                .add(Projections.property("city.id"), "cityId")
        );
        criteria.setResultTransformer(Transformers.aliasToBean(Account.class));
        return criteria.list();
    }

    /**
     * @param id
     */
    public Account getModel(Integer id) {
        AccountEntity entity = (AccountEntity) getSession().get(AccountEntity.class, id);
        List<Group> groups = new ArrayList<Group>();
        for (GroupEntity groupEntity : entity.getGroups()) {
            Group group = new Group();
            group.setId(groupEntity.getId());
            group.setName(groupEntity.getName());
            group.setDescription(groupEntity.getDescription());
            group.setDescription(groupEntity.getDescription());
            groups.add(group);
        }
        Account account = new Account();
        account.setId(entity.getId());
        account.setName(entity.getName());
        account.setAddress(entity.getAddress());
        account.setEmail(entity.getEmail());
        account.setGroups(groups);
        account.setPhone(entity.getPhone());
        account.setStatus(entity.getStatus());
        account.setUsername(entity.getUsername());
        account.setGender(entity.getGender());
        account.setDistrictId(entity.getDistrict().getId());
        account.setCityId(entity.getDistrict().getCity().getId());
        return account;
    }

}