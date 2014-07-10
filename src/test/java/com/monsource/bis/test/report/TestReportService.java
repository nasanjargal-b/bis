package com.monsource.bis.test.report;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.monsource.bis.data.entity.RecordEntity;
import com.monsource.bis.report.service.ReportViewService;
import org.hibernate.*;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.hibernate.sql.JoinType;
import org.hibernate.transform.Transformers;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.WebApplicationContext;

import java.util.List;
import java.util.Map;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.webAppContextSetup;

/**
 * Created by nasanjargal on 6/18/14.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration({"classpath:context-mod.xml", "classpath:context-db.xml", "classpath:context-web.xml"})
public class TestReportService {

    @Autowired
    ReportViewService reportViewService;

    @Autowired
    SessionFactory sessionFactory;

    @Autowired
    ObjectMapper objectMapper;

    @Test
    @Transactional
    public void testGetData() throws Exception {

        List<Map> data = reportViewService.calc(6);

        System.out.println(data.size());

        objectMapper.writeValue(System.out, data);

    }

    @Test
    @Transactional
    public void testCriteria() throws Exception {

        Session session = sessionFactory.getCurrentSession();

        SQLQuery query = session.createSQLQuery("select * from report.fn_blank_record('B01','result'); FETCH ALL IN result;");
        List list = query.list();

        System.out.println(list);

        /*Criteria criteria = session.createCriteria(RecordEntity.class);

        criteria.createAlias("district", "district");
        criteria.createAlias("research", "research");
        criteria.createAlias("district.city", "city");

        criteria.createCriteria("recordQuestions", "rq1", JoinType.LEFT_OUTER_JOIN, Restrictions.eq("rq1.question.id", 93))
                .createAlias("record","record").createCriteria("record.recordQuestions", "rq2", JoinType.LEFT_OUTER_JOIN, Restrictions.eq("rq2.question.id", 82))
                .createAlias("record","record").createCriteria("record.recordQuestions", "rq3", JoinType.LEFT_OUTER_JOIN, Restrictions.eq("rq3.question.id", 76));

//        criteria.createAlias("recordQuestions", "rq1");
//        criteria.createAlias("recordQuestions", "rq2");

        criteria.setProjection(Projections.projectionList()
                        .add(Projections.property("id"), "id")
                        .add(Projections.property("district.name"), "district")
                        .add(Projections.property("rq1.numeric"), "rq1")
                        .add(Projections.property("rq2.numeric"), "rq2")
                        .add(Projections.property("rq3.numeric"), "rq3")
        );

//        criteria.add(Restrictions.eq("rq1.question.id", 93));
//        criteria.add(Restrictions.eq("rq2.question.id", 82));

        criteria.setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP);

        List datas = criteria.list();*/

        /*Query query = session.createQuery("SELECT r.id as id,rq1.numeric as rq1_n, rq2.numeric as rq2_n FROM RecordEntity as r LEFT JOIN r.recordQuestions AS rq1 LEFT JOIN r.recordQuestions AS rq2 WHERE rq1.question.id = :rq1 AND rq2.question.id = :rq2");
        query.setInteger("rq1", 93);
        query.setInteger("rq2", 82);

        query.setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP);*/

//        List datas = query.list();

//        System.out.println(datas);
//        System.out.println(datas.size());

    }
}
