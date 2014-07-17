package com.monsource.bis.report.dao;

import com.monsource.bis.core.data.HibernateDaoSupport;
import com.monsource.bis.data.entity.CityEntity;
import com.monsource.bis.report.model.City;
import org.hibernate.Criteria;
import org.hibernate.criterion.Projections;
import org.hibernate.transform.Transformers;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by nasanjargal on 7/15/14.
 */
@Repository
public class ReportCityDao extends HibernateDaoSupport<CityEntity> {
    public List<City> findAll() {
        Criteria criteria = this.getSession().createCriteria(CityEntity.class);

        criteria.setProjection(Projections.projectionList()
                        .add(Projections.property("id"), "id")
                        .add(Projections.property("name"), "name")
        );

        criteria.setResultTransformer(Transformers.aliasToBean(City.class));

        return criteria.list();
    }
}
