package com.monsource.bis.account.dao;

import com.monsource.bis.account.model.Group;
import com.monsource.bis.core.data.HibernateDaoSupport;
import com.monsource.bis.core.security.Role;
import com.monsource.bis.data.entity.AccountEntity;
import com.monsource.bis.data.entity.GroupEntity;
import com.monsource.bis.data.entity.GroupRoleEntity;
import org.hibernate.Criteria;
import org.hibernate.criterion.MatchMode;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.hibernate.transform.Transformers;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class GroupDao extends HibernateDaoSupport<GroupEntity> {

    /**
     * @param text
     */
    public List<Group> find(String text) {
        Criteria criteria = getSession().createCriteria(GroupEntity.class);
        System.out.println("search: "+text);
        if (text != null && !"".equals(text)) {
            criteria.add(Restrictions.or(
                    Restrictions.like("description", text, MatchMode.ANYWHERE),
                    Restrictions.like("name", text, MatchMode.ANYWHERE)
            ));
        }
        criteria.setProjection(Projections.projectionList()
                .add(Projections.property("id"), "id")
                .add(Projections.property("name"), "name")
                .add(Projections.property("description"), "description")
        );
        criteria.setResultTransformer(Transformers.aliasToBean(Group.class));
        List<Group> groups = criteria.list();
        for (Group group : groups) {
            Criteria groupRole = getSession().createCriteria(GroupRoleEntity.class);
            groupRole.createAlias("group", "gr");
            groupRole.add(Restrictions.eq("gr.id", group.getId()));
            groupRole.setProjection(Projections.property("role"));
            List<Role> roles = groupRole.list();
            group.setRoles(roles);
        }
        for (Group list : groups) {
            Criteria accSize = getSession().createCriteria(AccountEntity.class);
            accSize.createAlias("groups", "groups");
            accSize.add(Restrictions.eq("groups.id", list.getId()));
            List roles = accSize.list();
            list.setAccountCount(roles.size());
        }

        return groups;
    }

    /**
     * @param id
     */
    public Group getModel(Integer id) {
        Criteria criteria = getSession().createCriteria(GroupEntity.class);
        criteria.add(Restrictions.eq("id", id));
        criteria.setProjection(Projections.projectionList()
                .add(Projections.property("id"), "id")
                .add(Projections.property("name"), "name")
                .add(Projections.property("description"), "description")
        );
        criteria.setResultTransformer(Transformers.aliasToBean(Group.class));
        return (Group) criteria.uniqueResult();
    }

}