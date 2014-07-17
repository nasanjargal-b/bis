package com.monsource.bis.report.dao;

import com.monsource.bis.core.data.HibernateDaoSupport;
import com.monsource.bis.data.entity.DistrictEntity;
import com.monsource.bis.report.model.District;
import org.hibernate.Criteria;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Projections;
import org.hibernate.transform.Transformers;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by nasanjargal on 7/15/14.
 */
@Repository
public class ReportDistrictDao extends HibernateDaoSupport<DistrictEntity> {
    public List<District> findAll() {
        Criteria criteria = this.getSession().createCriteria(DistrictEntity.class);
        criteria.createAlias("city", "city");
        criteria.setProjection(Projections.projectionList()
                        .add(Projections.property("id"), "id")
                        .add(Projections.property("name"), "name")
                        .add(Projections.property("city.name"), "cityName")
        );

        criteria.addOrder(Order.asc("city.name"));

        criteria.setResultTransformer(Transformers.aliasToBean(District.class));

        return criteria.list();
    }
}
