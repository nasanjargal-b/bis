package com.monsource.bis.test.blank;

import com.monsource.bis.blank.model.Question;
import org.junit.Before;
import org.junit.Test;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Marshaller;
import javax.xml.bind.Unmarshaller;
import java.io.File;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by nasanjargal on 6/2/14.
 */
public class TestXml {

    private Marshaller marshaller;
    private Unmarshaller unmarshaller;

    @Before
    public void init() throws JAXBException {

        /*JAXBContext jaxbContext = JAXBContext.newInstance(QuestionsXmlModel.class);
        marshaller = jaxbContext.createMarshaller();
        marshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, Boolean.TRUE);

        unmarshaller = jaxbContext.createUnmarshaller();*/

    }

    @Test
    public void TestUnmarshaller() throws JAXBException {
        /*QuestionsXmlModel question = (QuestionsXmlModel) unmarshaller.unmarshal(new File("/media/d/My Project/bis/WebBis/src/test/test.xml"));

        List<Question> questions = question.getQuestions();

        for (Question question1 : questions) {
            System.out.println(question1.getId());
            if (question1.getChildren() != null)
                for (Question question2 : question1.getChildren()) {
                    System.out.println("\t" + question2.getId());
                }
        }*/


    }

    @Test
    public void TestMarshaller() throws JAXBException {

       /* QuestionsXmlModel questions = new QuestionsXmlModel();

        ArrayList<Question> questionList = new ArrayList<Question>();
        questions.setQuestions(questionList);

        Question question = new Question();
        question.setId("id1");
        question.setName("Test");
        questions.getQuestions().add(question);

        marshaller.marshal(questions, System.out);*/

    }

}
