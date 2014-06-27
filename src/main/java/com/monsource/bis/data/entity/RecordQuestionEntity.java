package com.monsource.bis.data.entity;

import com.monsource.bis.core.data.DataEntity;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

/**
 * Created by nasanjargal on 6/20/14.
 */
@Entity
@Table(name = "record_question", schema = "registration", catalog = "bis")
public class RecordQuestionEntity implements DataEntity {
    private Integer id;
    private Double numeric;
    private String string;
    private Date date;
    private QuestionEntity question;
    private RecordEntity record;
    private List<ChoiceEntity> choices;

    @Id
    @Column(name = "id")
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Basic
    @Column(name = "numeric")
    public Double getNumeric() {
        return numeric;
    }

    public void setNumeric(Double numeric) {
        this.numeric = numeric;
    }

    @Basic
    @Column(name = "string")
    public String getString() {
        return string;
    }

    public void setString(String string) {
        this.string = string;
    }

    @Basic
    @Column(name = "date")
    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        RecordQuestionEntity that = (RecordQuestionEntity) o;

        if (date != null ? !date.equals(that.date) : that.date != null) return false;
        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (numeric != null ? !numeric.equals(that.numeric) : that.numeric != null) return false;
        if (string != null ? !string.equals(that.string) : that.string != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (numeric != null ? numeric.hashCode() : 0);
        result = 31 * result + (string != null ? string.hashCode() : 0);
        result = 31 * result + (date != null ? date.hashCode() : 0);
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

    @ManyToOne
    @JoinColumn(name = "record_id", referencedColumnName = "id", nullable = false)
    public RecordEntity getRecord() {
        return record;
    }

    public void setRecord(RecordEntity record) {
        this.record = record;
    }

    @ManyToMany()
    @JoinTable(name = "record_question_choice", catalog = "bis", schema = "registration",
            joinColumns = @JoinColumn(name = "record_question_id", referencedColumnName = "id", nullable = false),
            inverseJoinColumns = @JoinColumn(name = "choice_id", referencedColumnName = "id", nullable = false))
    public List<ChoiceEntity> getChoices() {
        return choices;
    }

    public void setChoices(List<ChoiceEntity> choices) {
        this.choices = choices;
    }
}
