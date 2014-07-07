package com.monsource.bis.blank.dao;

import com.monsource.bis.core.data.HibernateDaoSupport;
import com.monsource.bis.data.entity.ChoiceEntity;
import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

/**
 * Created by nasanjargal on 7/4/14.
 */
@Repository
public class ChoiceDao extends HibernateDaoSupport<ChoiceEntity> {


    public ChoiceEntity getChoice(Integer questionId, String code) {
        Criteria criteria = this.getSession().createCriteria(ChoiceEntity.class);

        criteria.createAlias("question", "question");
        criteria.add(Restrictions.eq("question.id", questionId));
        criteria.add(Restrictions.eq("code", code));


        return (ChoiceEntity) criteria.uniqueResult();

    }
}
