package com.monsource.bis.account.service;

import com.monsource.bis.account.dao.AccountDao;
import com.monsource.bis.data.entity.AccountEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.encoding.Md5PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;

@Service
public class AccountSrv {

    @Autowired
    AccountDao accountDao;

	/**
	 * 
	 * @param account
	 */
    @Transactional
	public void save(AccountEntity account) {
		accountDao.merge(account);
	}

	/**
	 * 
	 * @param account
	 */
    @Transactional
	public void remove(AccountEntity account) {
		accountDao.delete(account);
	}

	/**
	 * 
	 * @param password
	 * @param account
	 */
    @Transactional
	public void changePassword(String password, AccountEntity account) {
        Md5PasswordEncoder passwordEncoder = new Md5PasswordEncoder();
        Date date = new Date();
		account.setPassword(passwordEncoder.encodePassword(password,account.getSalt()));
        accountDao.merge(account);
	}

}