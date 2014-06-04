package com.monsource.bis.account.dao;

import com.monsource.bis.account.model.AccountGrid;
import com.monsource.bis.account.model.District;
import com.monsource.bis.core.data.HibernateDaoSupport;
import com.monsource.bis.data.entity.CityEntity;
import com.monsource.bis.data.entity.DistrictEntity;
import org.hibernate.Criteria;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.hibernate.transform.Transformers;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by nyamaa on 6/3/14.
 */
@Repository
public class DistrictDao extends HibernateDaoSupport<DistrictEntity> {
    public List<District> find(Integer cityId) {
        Criteria criteria = getSession().createCriteria(DistrictEntity.class);
        criteria.createAlias("city","city");
        criteria.add(Restrictions.eq("city.id",cityId));
        criteria.setProjection(Projections.projectionList()
                .add(Projections.property("id"),"id")
                .add(Projections.property("name"),"name")
                .add(Projections.property("city.id"),"cityId")
        );
        criteria.setResultTransformer(Transformers.aliasToBean(District.class));
        return criteria.list();
    }
}
