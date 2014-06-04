package com.monsource.bis.account.service;

import com.monsource.bis.account.dao.GroupDao;
import com.monsource.bis.account.dao.RoleDao;
import com.monsource.bis.data.entity.GroupEntity;
import com.monsource.bis.data.entity.GroupRoleEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class GroupSrv {

    @Autowired
	GroupDao groupDao;
    @Autowired
    RoleDao roleDao;

	/**
	 * 
	 * @param group
	 */
    @Transactional
	public void save(GroupEntity group) {
		groupDao.merge(group);
//        groupDao.flush();
	}

	/**
	 * 
	 * @param group
	 */
    @Transactional
	public void remove(GroupEntity group) {
        for (GroupRoleEntity groupRoleEntity : group.getGroupRoles()) {
            roleDao.delete(groupRoleEntity);
        }
        groupDao.delete(group);
	}

}