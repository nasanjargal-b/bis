package com.monsource.bis.blank.service;

import com.monsource.bis.blank.dao.BlankDao;
import com.monsource.bis.blank.dao.ResearchDao;
import com.monsource.bis.blank.model.Blanks;
import com.monsource.bis.blank.model.Research;
import com.monsource.bis.data.entity.BlankEntity;
import com.monsource.bis.data.entity.ResearchEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * Created by nyamaa on 6/4/14.
 */
@Service
public class ResearchService {
    @Autowired
    ResearchDao researchDao;
    @Autowired
    BlankDao blankDao;

    public List<Research> getAll() {
        return researchDao.getAll();
    }

    public void save(Research model) {
        ResearchEntity entity = new ResearchEntity();
        if (model.getId() != null && model.getId() != 0) {
            entity.setId(model.getId());
        }
        entity.setActive(model.getActive());
        entity.setDescription(model.getDescription());
        entity.setEndDate(model.getEndDate());
        entity.setStartDate(model.getStartDate());
        entity.setYear(model.getYear());
        Set<BlankEntity> blanks = new HashSet<BlankEntity>();
        for (Blanks blank : model.getBlanks()) {
            BlankEntity blankEntity = blankDao.get(blank.getId());
            blanks.add(blankEntity);
        }
        entity.setBlanks(blanks);
        researchDao.merge(entity);
    }

    public Research getModel(Integer id) {
        return researchDao.getModel(id);
    }

    public void delete(Integer id) {
        researchDao.delete(researchDao.get(id));
    }
}
