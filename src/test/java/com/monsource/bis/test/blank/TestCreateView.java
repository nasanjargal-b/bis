package com.monsource.bis.test.blank;

import com.monsource.bis.blank.component.BlankCreateBuilder;
import com.monsource.bis.blank.dao.TableViewDao;
import com.monsource.bis.blank.model.QuestionType;
import com.monsource.bis.data.entity.BlankEntity;
import com.monsource.bis.data.entity.QuestionEntity;
import com.monsource.bis.data.entity.TableViewEntity;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Restrictions;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.transaction.annotation.Transactional;

/**
 * Created by nasanjargal on 7/21/14.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration({"classpath:context-mod.xml", "classpath:context-db.xml", "classpath:context-web.xml"})
public class TestCreateView {

    @Autowired
    SessionFactory sessionFactory;
    @Autowired
    TableViewDao tableViewDao;

    @Test
    @Transactional
    public void testCreateView() throws Exception {

        Session session = sessionFactory.getCurrentSession();

        BlankEntity blank = (BlankEntity) session.get(BlankEntity.class, "Test");

        //=================================================================

        Criteria criteria = session.createCriteria(QuestionEntity.class);

        criteria.createAlias("blank", "blank");

        criteria.add(Restrictions.eq("blank.id", blank.getId()));
        criteria.add(Restrictions.ne("type", QuestionType.GROUP));

        criteria.addOrder(Order.asc("order"));

        TableViewEntity table = tableViewDao.getTable(blank.getId());

        System.out.println("table = " + table);

        BlankCreateBuilder blankCreateBuilder = new BlankCreateBuilder(blank, criteria.list(), table, tableViewDao.findMultiTable(table));

        for (String query : blankCreateBuilder.getQueries()) {

            session.createSQLQuery(query).executeUpdate();
        }

    }
}
