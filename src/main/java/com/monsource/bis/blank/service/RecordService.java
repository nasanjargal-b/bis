package com.monsource.bis.blank.service;

import com.monsource.bis.blank.dao.RecordDao;
import com.monsource.bis.core.security.AuthDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import com.monsource.bis.blank.model.*;

import javax.xml.bind.JAXBException;
import java.text.ParseException;
import java.util.List;

@Service
public class RecordService {

    @Autowired
    RecordDao recordDao;
    @Autowired
    BlankService blankSrv;

    /**
     * @param blankId
     * @param researchId
     * @param record
     */
    public void save(String blankId, Integer researchId, Record record) throws JAXBException, ParseException {
        Blank blank = blankSrv.get(blankId);
        record.setResearchId(researchId);
        AuthDetails authDetails = (AuthDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        record.setAccountId(authDetails.getId());
        recordDao.merge(blank, researchId, record);
        recordDao.flush();
    }

    /**
     * @param blankId
     * @param ids
     */
    public void delete(String blankId, List<Integer> ids) throws JAXBException {
        Blank blank = blankSrv.get(blankId);
        recordDao.delete(blank, ids);
    }
}