package com.monsource.bis.blank.service;

import com.monsource.bis.blank.dao.*;
import com.monsource.bis.blank.model.*;
import com.monsource.bis.core.exception.EntityNotFoundByIdException;
import com.monsource.bis.data.entity.BlankEntity;
import com.monsource.bis.data.entity.BlankGroupEntity;
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
import java.io.StringWriter;
import java.util.List;

@Service
public class BlankService {

    @Autowired
    BlankDao blankDao;
    @Autowired
    QuestionService questionService;

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

        questionService.saveBlankTable(blank);

        QuestionsXmlModel questionsXmlModel = new QuestionsXmlModel();
        questionsXmlModel.setQuestions(blank.getQuestions());
        StringWriter writer = new StringWriter();
        marshaller.marshal(questionsXmlModel, writer);

        BlankEntity blankEntity = new BlankEntity();
        blankEntity.setId(blank.getId());
        blankEntity.setName(blank.getName());
        blankEntity.setBlankGroup(new BlankGroupEntity(blank.getBlankGroupId()));
        blankEntity.setQuestions(writer.getBuffer().toString());

        blankDao.merge(blankEntity);
    }

    /**
     * @param ids
     */
    public void delete(List<String> ids) throws JAXBException {
        for (String id : ids) {
            Blank blank = this.get(id);

            questionService.dropBlankTable(blank);

            BlankEntity blankEntity = blankDao.get(id);

            blankDao.delete(blankEntity);
        }
    }

}