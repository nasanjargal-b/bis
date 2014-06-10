package com.monsource.bis.blank.dao;

import com.monsource.bis.blank.model.*;
import com.monsource.bis.core.data.HibernateDaoSupport;
import com.monsource.bis.data.entity.CityEntity;
import com.monsource.bis.data.entity.DistrictEntity;
import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class BlankCityDao extends HibernateDaoSupport<CityEntity> {

    public List<City> findAll() {
        Criteria criteria = this.getSession().createCriteria(CityEntity.class);
        List<CityEntity> cities = criteria.list();

        List<City> result = new ArrayList<>();

        for (CityEntity cityEntity : cities) {
            City city = new City(cityEntity.getId(), cityEntity.getName());
            city.setDistricts(new ArrayList<District>());
            for (DistrictEntity districtEntity : cityEntity.getDistricts()) {
                city.getDistricts().add(new District(districtEntity.getId(), districtEntity.getName()));
            }
            result.add(city);
        }
        return result;
    }

    public CityEntity findByName(String name) {
        Criteria criteria = this.getSession().createCriteria(CityEntity.class);

        criteria.add(Restrictions.ilike("name", name));

        return (CityEntity) criteria.uniqueResult();
    }

}