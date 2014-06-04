package com.monsource.bis.account.controller;

import com.monsource.bis.account.dao.GroupDao;
import com.monsource.bis.account.dao.RoleDao;
import com.monsource.bis.account.model.Group;
import com.monsource.bis.account.service.GroupSrv;
import com.monsource.bis.core.json.JsonData;
import com.monsource.bis.core.security.Role;
import com.monsource.bis.data.entity.GroupEntity;
import com.monsource.bis.data.entity.GroupRoleEntity;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashSet;
import java.util.Set;

@Controller
@RequestMapping("/account-mod/group")
public class GroupCtrl {

    @Autowired
    GroupDao groupDao;
    @Autowired
    GroupSrv groupSrv;
    @Autowired
    RoleDao roleDao;

    /**
     * @param text
     */
    @RequestMapping(value = "list.json", method = RequestMethod.GET)
    @ResponseBody
    public JsonData read(String text) {
        JsonData data = new JsonData();
        data.setData(groupDao.find(text));
        return data;
    }

    /**
     * @param id
     */
    @RequestMapping(value = "single.json", method = RequestMethod.GET)
    @ResponseBody
    public JsonData get(Integer id) {
        JsonData data = new JsonData();
        data.setData(groupDao.getModel(id));
        return data;
    }

    /**
     * @param group
     */
    @RequestMapping(value = "single.json", method = RequestMethod.POST)
    @ResponseBody
    public JsonData save(Group group) {
        JsonData message = new JsonData();
        GroupEntity groupEntity = new GroupEntity();
        if (group.getId() != null && group.getId() != 0) {
            groupEntity.setId(group.getId());
            GroupEntity groupDelete = groupDao.get(group.getId());
            for (GroupRoleEntity groupRoleEntity : groupDelete.getGroupRoles()) {
                roleDao.delete(groupRoleEntity);
            }
        }
        groupEntity.setDescription(group.getDescription());
        groupEntity.setName(group.getName());
        Set<GroupRoleEntity> roles = new HashSet<GroupRoleEntity>();
        if (group.getRoles() != null) {
            for (Role role : group.getRoles()) {
                GroupRoleEntity gre = new GroupRoleEntity();
                gre.setGroup(groupEntity);
                gre.setRole(role);
                roles.add(gre);
            }
        }
        groupEntity.setGroupRoles(roles);
        groupSrv.save(groupEntity);
        return message;
    }

    /**
     * @param id
     */
    @RequestMapping(value = "single.json", method = RequestMethod.DELETE)
    @ResponseBody
    public JsonData remove(Integer id) {
        System.out.println("group.getId() = " + id);
        JsonData message = new JsonData();
        groupSrv.remove(groupDao.get(id));
        return message;
    }

}