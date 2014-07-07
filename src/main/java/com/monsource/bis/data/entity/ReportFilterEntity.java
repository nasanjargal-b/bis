package com.monsource.bis.data.entity;

import com.monsource.bis.core.data.DataEntity;
import com.monsource.bis.data.entity.type.ReportFilterType;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Time;
import java.util.List;

/**
 * Created by nasanjargal on 7/6/14.
 */
@Entity
@Table(name = "report_filter", schema = "report", catalog = "bis")
public class ReportFilterEntity implements DataEntity {
    private Integer id;
    private ReportFilterType type;
    private Double numeric;
    private String string;
    private Date date;
    private Time time;
    private Boolean prompt;
    private Integer order;
    private QuestionEntity question;
    private ReportEntity report;
    private List<ChoiceEntity> choices;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "report_filter_seq_gen")
    @SequenceGenerator(name = "report_filter_seq_gen", sequenceName = "report.report_filter_id_seq")
    @Column(name = "id")
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Basic
    @Enumerated(EnumType.STRING)
    @Column(name = "filter_type")
    public ReportFilterType getType() {
        return type;
    }

    public void setType(ReportFilterType type) {
        this.type = type;
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

    @Basic
    @Column(name = "time")
    public Time getTime() {
        return time;
    }

    public void setTime(Time time) {
        this.time = time;
    }

    @Basic
    @Column(name = "prompt")
    public Boolean getPrompt() {
        return prompt;
    }

    public void setPrompt(Boolean prompt) {
        this.prompt = prompt;
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

        ReportFilterEntity that = (ReportFilterEntity) o;

        if (date != null ? !date.equals(that.date) : that.date != null) return false;
        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (numeric != null ? !numeric.equals(that.numeric) : that.numeric != null) return false;
        if (order != null ? !order.equals(that.order) : that.order != null) return false;
        if (prompt != null ? !prompt.equals(that.prompt) : that.prompt != null) return false;
        if (string != null ? !string.equals(that.string) : that.string != null) return false;
        if (time != null ? !time.equals(that.time) : that.time != null) return false;
        if (type != that.type) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (type != null ? type.hashCode() : 0);
        result = 31 * result + (numeric != null ? numeric.hashCode() : 0);
        result = 31 * result + (string != null ? string.hashCode() : 0);
        result = 31 * result + (date != null ? date.hashCode() : 0);
        result = 31 * result + (time != null ? time.hashCode() : 0);
        result = 31 * result + (prompt != null ? prompt.hashCode() : 0);
        result = 31 * result + (order != null ? order.hashCode() : 0);
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
    @JoinColumn(name = "report_id", referencedColumnName = "id", nullable = false)
    public ReportEntity getReport() {
        return report;
    }

    public void setReport(ReportEntity report) {
        this.report = report;
    }

    @ManyToMany
    @JoinTable(name = "choice_report_filter", catalog = "bis", schema = "report", joinColumns = @JoinColumn(name = "report_filter_id", referencedColumnName = "id", nullable = false), inverseJoinColumns = @JoinColumn(name = "choice_id", referencedColumnName = "id", nullable = false))
    public List<ChoiceEntity> getChoices() {
        return choices;
    }

    public void setChoices(List<ChoiceEntity> choices) {
        this.choices = choices;
    }
}
