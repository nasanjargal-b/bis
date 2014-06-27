package com.monsource.bis.data.entity;

import com.monsource.bis.core.data.DataEntity;
import org.hibernate.annotations.*;
import org.hibernate.annotations.CascadeType;

import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.List;

/**
 * Created by nasanjargal on 6/20/14.
 */
@Entity
@Table(name = "choice", schema = "registration", catalog = "bis")
public class ChoiceEntity implements DataEntity {
    private Integer id;
    private String code;
    private String text;
    private QuestionEntity question;
//    private List<RecordQuestionEntity> recordQuestions;

    public ChoiceEntity() {
    }

    public ChoiceEntity(Integer id, String code, String text, QuestionEntity question) {
        this.id = id;
        this.code = code;
        this.text = text;
        this.question = question;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Basic
    @Column(name = "code")
    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    @Basic
    @Column(name = "text")
    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ChoiceEntity that = (ChoiceEntity) o;

        if (code != null ? !code.equals(that.code) : that.code != null) return false;
        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (text != null ? !text.equals(that.text) : that.text != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (code != null ? code.hashCode() : 0);
        result = 31 * result + (text != null ? text.hashCode() : 0);
        return result;
    }

    @ManyToOne
    @JoinColumn(name = "question_id", referencedColumnName = "id", nullable = false)
    public QuestionEntity getQuestion() {
        return question;
    }

    public void setQuestion(QuestionEntity question) {
        this.question = question;
    }

    /*@ManyToMany()
    @Cascade({CascadeType.MERGE})
    @JoinTable(name = "record_question_choice", catalog = "bis", schema = "registration",
            joinColumns = @JoinColumn(name = "choice_id", referencedColumnName = "id", nullable = false),
            inverseJoinColumns = @JoinColumn(name = "record_question_id", referencedColumnName = "id", nullable = false))
    public List<RecordQuestionEntity> getRecordQuestions() {
        return recordQuestions;
    }

    public void setRecordQuestions(List<RecordQuestionEntity> recordQuestions) {
        this.recordQuestions = recordQuestions;
    }*/
}
