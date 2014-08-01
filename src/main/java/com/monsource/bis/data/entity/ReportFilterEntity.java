package com.monsource.bis.data.entity;

import com.monsource.bis.blank.model.QuestionType;
import com.monsource.bis.core.data.DataEntity;
import com.monsource.bis.data.entity.type.ReportQuestionType;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Time;
import java.util.List;

/**
 * Created by nasanjargal on 7/6/14.
 */
@Entity
@Table(name = "report_filter", schema = "report", catalog = "PUBLIC")
public class ReportFilterEntity implements DataEntity {
    private Integer id;
    private ReportQuestionType type;
    private QuestionType columnType;
    private Boolean prompt;
    private String filter;
    private Integer order;
    private QuestionEntity question;
    private ReportEntity report;
    private List<ChoiceEntity> choices;
    private CityEntity city;
    private DistrictEntity district;
    private ResearchEntity research;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "report_filter_seq_gen")
    @SequenceGenerator(name = "report_filter_seq_gen", sequenceName = "report.seq_report_filter")
    @Column(name = "id")
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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

        if (filter != null ? !filter.equals(that.filter) : that.filter != null) return false;
        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (order != null ? !order.equals(that.order) : that.order != null) return false;
        if (prompt != null ? !prompt.equals(that.prompt) : that.prompt != null) return false;
        if (type != that.type) return false;
        if (columnType != that.columnType) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (type != null ? type.hashCode() : 0);
        result = 31 * result + (columnType != null ? columnType.hashCode() : 0);
        result = 31 * result + (prompt != null ? prompt.hashCode() : 0);
        result = 31 * result + (filter != null ? filter.hashCode() : 0);
        result = 31 * result + (order != null ? order.hashCode() : 0);
        return result;
    }

    @ManyToOne
    @JoinColumn(name = "question_id", referencedColumnName = "id")
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
    @JoinTable(name = "choice_report_filter", catalog = "PUBLIC", schema = "report",
            joinColumns = @JoinColumn(name = "report_filter_id", referencedColumnName = "id", nullable = false),
            inverseJoinColumns = @JoinColumn(name = "choice_id", referencedColumnName = "id", nullable = false))
    public List<ChoiceEntity> getChoices() {
        return choices;
    }

    public void setChoices(List<ChoiceEntity> choices) {
        this.choices = choices;
    }

    @ManyToOne
    @JoinColumn(name = "city_id", referencedColumnName = "id")
    public CityEntity getCity() {
        return city;
    }

    public void setCity(CityEntity city) {
        this.city = city;
    }

    @ManyToOne
    @JoinColumn(name = "district_id", referencedColumnName = "id")
    public DistrictEntity getDistrict() {
        return district;
    }

    public void setDistrict(DistrictEntity district) {
        this.district = district;
    }

    @ManyToOne
    @JoinColumn(name = "research_id", referencedColumnName = "id")
    public ResearchEntity getResearch() {
        return research;
    }

    public void setResearch(ResearchEntity research) {
        this.research = research;
    }
}
