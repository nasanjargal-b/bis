package com.monsource.bis.data.entity;

import com.monsource.bis.core.data.DataEntity;
import com.monsource.bis.data.entity.type.ReportQuestionType;

import javax.persistence.*;
import java.util.List;

/**
 * Created by nasanjargal on 7/6/14.
 */
@Entity
@Table(name = "report_question", schema = "report", catalog = "bis")
public class ReportQuestionEntity implements DataEntity {
    private Integer id;
    private String name;
    private ReportQuestionType type;
    private Boolean group;
    private Double to;
    private Double from;
    private Integer order;
    private ReportEntity report;
    private QuestionEntity question;
    private List<ReportChartEntity> reportCharts;
    private List<ChoiceEntity> choices;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "report_question_seq_gen")
    @SequenceGenerator(name = "report_question_seq_gen", sequenceName = "report.report_question_id_seq")
    @Column(name = "id")
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Basic
    @Column(name = "name")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Basic
    @Enumerated(EnumType.STRING)
    @Column(name = "type")
    public ReportQuestionType getType() {
        return type;
    }

    public void setType(ReportQuestionType type) {
        this.type = type;
    }

    @Basic
    @Column(name = "group")
    public Boolean getGroup() {
        return group;
    }

    public void setGroup(Boolean group) {
        this.group = group;
    }

    @Basic
    @Column(name = "to")
    public Double getTo() {
        return to;
    }

    public void setTo(Double to) {
        this.to = to;
    }

    @Basic
    @Column(name = "from")
    public Double getFrom() {
        return from;
    }

    public void setFrom(Double from) {
        this.from = from;
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

        ReportQuestionEntity that = (ReportQuestionEntity) o;

        if (from != null ? !from.equals(that.from) : that.from != null) return false;
        if (group != null ? !group.equals(that.group) : that.group != null) return false;
        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (name != null ? !name.equals(that.name) : that.name != null) return false;
        if (order != null ? !order.equals(that.order) : that.order != null) return false;
        if (to != null ? !to.equals(that.to) : that.to != null) return false;
        if (type != that.type) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (type != null ? type.hashCode() : 0);
        result = 31 * result + (group != null ? group.hashCode() : 0);
        result = 31 * result + (to != null ? to.hashCode() : 0);
        result = 31 * result + (from != null ? from.hashCode() : 0);
        result = 31 * result + (order != null ? order.hashCode() : 0);
        return result;
    }

    @ManyToOne
    @JoinColumn(name = "report_id", referencedColumnName = "id", nullable = false)
    public ReportEntity getReport() {
        return report;
    }

    public void setReport(ReportEntity report) {
        this.report = report;
    }

    @ManyToOne
    @JoinColumn(name = "question_id", referencedColumnName = "id", nullable = false)
    public QuestionEntity getQuestion() {
        return question;
    }

    public void setQuestion(QuestionEntity question) {
        this.question = question;
    }

    @ManyToMany(mappedBy = "datas")
    public List<ReportChartEntity> getReportCharts() {
        return reportCharts;
    }

    public void setReportCharts(List<ReportChartEntity> reportCharts) {
        this.reportCharts = reportCharts;
    }

    @ManyToMany
    @JoinTable(name = "report_question_choice", catalog = "bis", schema = "report", joinColumns = @JoinColumn(name = "report_question_id", referencedColumnName = "id", nullable = false), inverseJoinColumns = @JoinColumn(name = "choice_id", referencedColumnName = "id", nullable = false))
    public List<ChoiceEntity> getChoices() {
        return choices;
    }

    public void setChoices(List<ChoiceEntity> choices) {
        this.choices = choices;
    }
}
