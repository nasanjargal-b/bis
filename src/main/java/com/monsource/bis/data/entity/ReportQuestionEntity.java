package com.monsource.bis.data.entity;

import com.monsource.bis.blank.model.QuestionType;
import com.monsource.bis.core.data.DataEntity;
import com.monsource.bis.data.entity.type.ReportCalcType;
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
    private String code;
    private String name;
    private ReportQuestionType type;
    private ReportCalcType calcType;
    private QuestionType columnType;
    private String filter;
    private Integer order;
    private ReportEntity report;
    private QuestionEntity question;
    private List<ReportChartEntity> reportCharts;
    private ChoiceEntity choice;

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
    @Column(name = "code")
    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
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
    @Enumerated(EnumType.STRING)
    @Column(name = "calc_type")
    public ReportCalcType getCalcType() {
        return calcType;
    }

    public void setCalcType(ReportCalcType calcType) {
        this.calcType = calcType;
    }

    @Basic
    @Enumerated(EnumType.STRING)
    @Column(name = "column_type")
    public QuestionType getColumnType() {
        return columnType;
    }

    public void setColumnType(QuestionType columnType) {
        this.columnType = columnType;
    }

    @Basic
    @Column(name = "filter")
    public String getFilter() {
        return filter;
    }

    public void setFilter(String filter) {
        this.filter = filter;
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

        if (calcType != that.calcType) return false;
        if (code != null ? !code.equals(that.code) : that.code != null) return false;
        if (columnType != that.columnType) return false;
        if (filter != null ? !filter.equals(that.filter) : that.filter != null) return false;
        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (name != null ? !name.equals(that.name) : that.name != null) return false;
        if (order != null ? !order.equals(that.order) : that.order != null) return false;
        if (type != that.type) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (code != null ? code.hashCode() : 0);
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (type != null ? type.hashCode() : 0);
        result = 31 * result + (calcType != null ? calcType.hashCode() : 0);
        result = 31 * result + (columnType != null ? columnType.hashCode() : 0);
        result = 31 * result + (filter != null ? filter.hashCode() : 0);
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
    @JoinColumn(name = "question_id", referencedColumnName = "id")
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

    @ManyToOne
    @JoinColumn(name = "choice_id", referencedColumnName = "id")
    public ChoiceEntity getChoice() {
        return choice;
    }

    public void setChoice(ChoiceEntity choice) {
        this.choice = choice;
    }
}
