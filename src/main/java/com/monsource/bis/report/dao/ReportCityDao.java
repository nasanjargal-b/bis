package com.monsource.bis.report.dao;

import com.monsource.bis.core.data.HibernateDaoSupport;
import com.monsource.bis.data.entity.CityEntity;
import com.monsource.bis.data.entity.DistrictEntity;
import com.monsource.bis.report.model.City;
import com.monsource.bis.report.model.District;
import org.hibernate.Criteria;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.hibernate.transform.Transformers;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
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

        List<City> cities = criteria.list();

        for (City city : cities) {
            Criteria dCriteria = this.getSession().createCriteria(DistrictEntity.class);

            dCriteria.createAlias("city", "city");
            dCriteria.add(Restrictions.eq("city.id", city.getId()));

            dCriteria.setProjection(Projections.projectionList()
                            .add(Projections.property("id"), "id")
                            .add(Projections.property("name"), "name")
            );

            dCriteria.setResultTransformer(Transformers.aliasToBean(District.class));

            city.setDistricts(dCriteria.list());
        }

        return cities;
    }
}
