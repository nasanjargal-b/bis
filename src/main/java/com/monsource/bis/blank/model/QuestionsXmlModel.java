package com.monsource.bis.blank.model;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.List;

/**
 * Created by nasanjargal on 6/2/14.
 */
@XmlRootElement(name = "questions")
public class QuestionsXmlModel {
    List<Question> questions;

    public List<Question> getQuestions() {
        return questions;
    }

    @XmlElement(name = "question")
    public void setQuestions(List<Question> questions) {
        this.questions = questions;
    }
}
