package com.monsource.bis.data.entity;

import com.monsource.bis.core.data.DataEntity;

import javax.persistence.*;
import java.util.List;

/**
 * Created by nasanjargal on 6/20/14.
 */
@Entity
@Table(name = "question", schema = "registration", catalog = "bis")
public class QuestionEntity implements DataEntity {
    private String id;
    private String text;
    private String type;
    private String format;
    private List<ChoiceEntity> choices;
    private BlankEntity blank;
    private QuestionGroupEntity questionGroup;
    private List<RecordQuestionEntity> recordQuestions;

    @Id
    @Column(name = "id")
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    @Basic
    @Column(name = "text")
    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    @Basic
    @Column(name = "type")
    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @Basic
    @Column(name = "format")
    public String getFormat() {
        return format;
    }

    public void setFormat(String format) {
        this.format = format;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        QuestionEntity that = (QuestionEntity) o;

        if (format != null ? !format.equals(that.format) : that.format != null) return false;
        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (text != null ? !text.equals(that.text) : that.text != null) return false;
        if (type != null ? !type.equals(that.type) : that.type != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (text != null ? text.hashCode() : 0);
        result = 31 * result + (type != null ? type.hashCode() : 0);
        result = 31 * result + (format != null ? format.hashCode() : 0);
        return result;
    }

    @OneToMany(mappedBy = "question")
    public List<ChoiceEntity> getChoices() {
        return choices;
    }

    public void setChoices(List<ChoiceEntity> choices) {
        this.choices = choices;
    }

    @ManyToOne
    @JoinColumn(name = "blank_id", referencedColumnName = "id", nullable = false)
    public BlankEntity getBlank() {
        return blank;
    }

    public void setBlank(BlankEntity blank) {
        this.blank = blank;
    }

    @ManyToOne
    @JoinColumn(name = "question_group_id", referencedColumnName = "id", nullable = false)
    public QuestionGroupEntity getQuestionGroup() {
        return questionGroup;
    }

    public void setQuestionGroup(QuestionGroupEntity questionGroup) {
        this.questionGroup = questionGroup;
    }

    @OneToMany(mappedBy = "question")
    public List<RecordQuestionEntity> getRecordQuestions() {
        return recordQuestions;
    }

    public void setRecordQuestions(List<RecordQuestionEntity> recordQuestions) {
        this.recordQuestions = recordQuestions;
    }
}
