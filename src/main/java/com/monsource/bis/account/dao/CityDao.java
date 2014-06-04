package com.monsource.bis.account.dao;

import com.monsource.bis.account.model.Account;
import com.monsource.bis.account.model.AccountGrid;
import com.monsource.bis.account.model.City;
import com.monsource.bis.account.model.District;
import com.monsource.bis.core.data.HibernateDaoSupport;
import com.monsource.bis.data.entity.AccountEntity;
import com.monsource.bis.data.entity.CityEntity;
import com.monsource.bis.data.entity.DistrictEntity;
import com.monsource.bis.data.entity.type.AccountStatus;
import org.hibernate.Criteria;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.hibernate.transform.Transformers;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public class CityDao extends HibernateDaoSupport<CityEntity> {
    public List<City> find() {
        Criteria criteria = getSession().createCriteria(CityEntity.class);
        criteria.setProjection(Projections.projectionList()
            .add(Projections.property("id"),"id")
            .add(Projections.property("name"),"name")
        );
        criteria.setResultTransformer(Transformers.aliasToBean(City.class));
        List<City> cities = criteria.list();
        for (City city : cities) {
            Criteria districtCriteria = getSession().createCriteria(DistrictEntity.class);
            districtCriteria.createAlias("city","city");
            districtCriteria.add(Restrictions.eq("city.id",city.getId()));
            districtCriteria.setProjection(Projections.projectionList()
                    .add(Projections.property("id"), "id")
                    .add(Projections.property("name"),"name")
                    .add(Projections.property("city.id"),"cityId")
            );
            districtCriteria.setResultTransformer(Transformers.aliasToBean(District.class));
            List<District> districts = districtCriteria.list();
            city.setDistricts(districts);
        }
        return cities;
    }
}
