package com.monsource.bis.account.controller;

import com.monsource.bis.account.dao.AccountDao;
import com.monsource.bis.account.dao.DistrictDao;
import com.monsource.bis.account.model.Account;
import com.monsource.bis.account.model.Group;
import com.monsource.bis.account.service.AccountSrv;
import com.monsource.bis.core.json.JsonData;
import com.monsource.bis.core.security.AuthDetails;
import com.monsource.bis.core.security.AuthSupport;
import com.monsource.bis.core.security.Role;
import com.monsource.bis.data.entity.AccountEntity;
import com.monsource.bis.data.entity.DistrictEntity;
import com.monsource.bis.data.entity.GroupEntity;
import com.monsource.bis.data.entity.type.AccountStatus;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.encoding.Md5PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.xml.bind.JAXBException;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Controller
@RequestMapping("/account-mod/account")
public class AccountCtrl {

    @Autowired
    AccountDao accountDao;
    @Autowired
    AccountSrv accountSrv;
    @Autowired
    DistrictDao districtDao;
    @Autowired
    private AuthSupport authSupport;
    @Autowired
    SessionFactory sessionFactory;

    /**
     * @param text
     * @param status
     */
    @RequestMapping(value = "list.json", method = RequestMethod.GET)
    @ResponseBody
    public JsonData read(String text, AccountStatus status){
        JsonData jsonData = new JsonData();
        jsonData.setData(accountDao.find(text, status));
        return jsonData;
    }

    /**
     * @param id
     */
    @RequestMapping(value = "single.json", method = RequestMethod.GET)
    @ResponseBody
    public JsonData get(Integer id) {
        JsonData jsonData = new JsonData();
        jsonData.setData(accountDao.getModel(id));
        return jsonData;
    }

    /**
     * @param account
     */
    @RequestMapping(value = "single.json", method = RequestMethod.POST)
    @ResponseBody
    @Transactional
    public JsonData save(@RequestBody Account account)  throws JAXBException{
        AccountEntity entity = new AccountEntity();
        entity.setId(account.getId());
        entity.setUsername(account.getUsername());
        entity.setName(account.getName());
        entity.setAddress(account.getAddress());
        entity.setEmail(account.getEmail());
        entity.setGender(account.getGender());
        entity.setPhone(account.getPhone());
        entity.setStatus(account.getStatus());
        Set<GroupEntity> groups = new HashSet<GroupEntity>();
        if (account.getGroups() != null) {
            for (Group group : account.getGroups()) {
                GroupEntity group1 = new GroupEntity();
                group1.setName(group.getName());
                group1.setDescription(group.getDescription());
                group1.setId(group.getId());
                group1.setId(group.getId());
                groups.add(group1);
            }
        }
        entity.setGroups(groups);
        entity.setDistrict(districtDao.get(account.getDistrictId()));
        Md5PasswordEncoder passwordEncoder = new Md5PasswordEncoder();
        Date date = new Date();
        entity.setSalt(date.getTime() + "");
        entity.setPassword(passwordEncoder.encodePassword(account.getUsername(), entity.getSalt()));
        accountDao.merge(entity);
        accountDao.flush();
        JsonData data = new JsonData();
        data.setData(entity);
        return new JsonData(true);
    }

    /**
     * @param account
     */
    @RequestMapping(value = "single.json", method = RequestMethod.DELETE)
    @ResponseBody
    public JsonData remove(@RequestBody Account account) {
        accountDao.delete(accountDao.get(account.getId()));
        accountDao.flush();
        return new JsonData(true);
    }

    /**
     * @param password
     */
    @RequestMapping(value = "password.json", method = RequestMethod.POST, params = {"password"})
    @ResponseBody
    public JsonData password(String password) {
        AuthDetails authDetails = authSupport.getAuthDetails();
        AccountEntity entity = accountDao.get(authDetails.getId());
        Md5PasswordEncoder passwordEncoder = new Md5PasswordEncoder();
        Date date = new Date();
        entity.setSalt(date.getTime() + "");
        entity.setPassword(passwordEncoder.encodePassword(entity.getUsername(), entity.getSalt()));
        accountDao.merge(entity);
        return new JsonData(true);
    }

    /**
     * @param password
     * @param id
     */
    @RequestMapping(value = "password.json", method = RequestMethod.POST, params = {"password", "id"})
    @ResponseBody
    public JsonData password(String password, Integer id) {
        if (!authSupport.checkAuthority(Role.ROLE_ADMINISTRATOR)) {
            throw new AccessDeniedException("You don't have permission to change password of other user!!!");
        }
        accountSrv.changePassword(password, accountDao.get(id));
        return new JsonData(true);
    }

}