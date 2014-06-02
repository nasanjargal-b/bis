package com.monsource.bis.blank.service;

import com.monsource.bis.blank.dao.*;
import com.monsource.bis.blank.model.*;
import com.monsource.bis.data.entity.BlankEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Marshaller;
import javax.xml.bind.Unmarshaller;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlElementWrapper;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlSchema;
import javax.xml.transform.stream.StreamSource;
import java.io.StringReader;
import java.util.List;

@Service
public class BlankService {

    @Autowired
    BlankDao blankDao;
    private Marshaller marshaller;
    private Unmarshaller unmarshaller;

    public BlankService() throws JAXBException {

        JAXBContext jaxbContext = JAXBContext.newInstance(QuestionsXmlModel.class);
        marshaller = jaxbContext.createMarshaller();
        marshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, Boolean.TRUE);

        unmarshaller = jaxbContext.createUnmarshaller();

    }

    /**
     * @param id
     */
    public Blank get(String id) throws javax.xml.bind.JAXBException {
        BlankEntity entity = blankDao.get(id);

        Blank blank = new Blank(
                entity.getId(),
                entity.getName(),
                entity.getBlankGroup().getId()
        );

        QuestionsXmlModel questionsXmlModel = (QuestionsXmlModel) unmarshaller.unmarshal(new StreamSource(new StringReader(entity.getQuestions())));

        blank.setQuestions(questionsXmlModel.getQuestions());

        return blank;
    }

    /**
     * @param blank
     */
    public void save(Blank blank) throws javax.xml.bind.JAXBException {
        // TODO - implement BlankService.save
        throw new UnsupportedOperationException();
    }

    /**
     * @param ids
     */
    public void delete(List<String> ids) {
        // TODO - implement BlankService.delete
        throw new UnsupportedOperationException();
    }

}