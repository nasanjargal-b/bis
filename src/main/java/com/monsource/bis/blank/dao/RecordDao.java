package com.monsource.bis.blank.dao;

//import com.monsource.bis.blank.controller.RecordFilter;

import com.monsource.bis.blank.exception.ChoiceNotMatchException;
import com.monsource.bis.blank.model.Blank;
import com.monsource.bis.blank.model.Question;
import com.monsource.bis.blank.model.Record;
import com.monsource.bis.blank.service.BlankService;
//import com.monsource.bis.blank.service.QuestionService;
import com.monsource.bis.core.data.HibernateDaoSupport;
import com.monsource.bis.data.entity.RecordEntity;
import org.hibernate.Criteria;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Restrictions;
import org.hibernate.type.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.xml.bind.JAXBException;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@Repository
public class RecordDao extends HibernateDaoSupport<RecordEntity> {
    public List<RecordEntity> find(String blankId, Integer researchId, Integer districtId) {
        Criteria criteria = this.getSession().createCriteria(RecordEntity.class);

        criteria.createAlias("blank", "blank");
        criteria.createAlias("district", "district");
        criteria.createAlias("research", "research");

        criteria.add(Restrictions.eq("blank.id", blankId));
        criteria.add(Restrictions.eq("district.id", districtId));
        criteria.add(Restrictions.eq("research.id", researchId));

        criteria.addOrder(Order.asc("id"));

        return criteria.list();
    }
}