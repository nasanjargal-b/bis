package com.monsource.bis.data.entity;

import com.monsource.bis.blank.model.QuestionType;
import com.monsource.bis.core.data.DataEntity;

import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.List;

/**
 * Created by nasanjargal on 6/20/14.
 */
@Entity
@Table(name = "question", schema = "registration", catalog = "bis")
public class QuestionEntity implements DataEntity {
    private Integer id;
    private String code;
    private String text;
    private QuestionType type;
    private String format;
    private Integer order;
    private List<ChoiceEntity> choices;
    private BlankEntity blank;
    private List<RecordQuestionEntity> recordQuestions;
    private QuestionEntity parent;
    private List<QuestionEntity> children;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "question_seq_gen")
    @SequenceGenerator(name = "question_seq_gen", sequenceName = "registration.question_id_seq")
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
    @Column(name = "\"text\"")
    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    @Basic
    @Enumerated(EnumType.STRING)
    @Column(name = "type")
    public QuestionType getType() {
        return type;
    }

    public void setType(QuestionType type) {
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

    @Basic
    @Column(name = "\"order\"")
    public Integer getOrder() {
        return order;
    }

    public void setOrder(Integer order) {
        this.order = order;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        QuestionEntity that = (QuestionEntity) o;

        if (code != null ? !code.equals(that.code) : that.code != null) return false;
        if (format != null ? !format.equals(that.format) : that.format != null) return false;
        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (order != null ? !order.equals(that.order) : that.order != null) return false;
        if (text != null ? !text.equals(that.text) : that.text != null) return false;
        if (type != that.type) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (code != null ? code.hashCode() : 0);
        result = 31 * result + (text != null ? text.hashCode() : 0);
        result = 31 * result + (type != null ? type.hashCode() : 0);
        result = 31 * result + (format != null ? format.hashCode() : 0);
        result = 31 * result + (order != null ? order.hashCode() : 0);
        return result;
    }

    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL, orphanRemoval = true)
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

    @OneToMany(mappedBy = "question")
    public List<RecordQuestionEntity> getRecordQuestions() {
        return recordQuestions;
    }

    public void setRecordQuestions(List<RecordQuestionEntity> recordQuestions) {
        this.recordQuestions = recordQuestions;
    }

    @ManyToOne
    @JoinColumn(name = "parent_id", referencedColumnName = "id")
    public QuestionEntity getParent() {
        return parent;
    }

    public void setParent(QuestionEntity parent) {
        this.parent = parent;
    }

    @OneToMany(mappedBy = "parent")
    @OrderBy("order asc")
    public List<QuestionEntity> getChildren() {
        return children;
    }

    public void setChildren(List<QuestionEntity> children) {
        this.children = children;
    }
}
