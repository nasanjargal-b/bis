package com.monsource.bis.data.entity;

import com.monsource.bis.data.entity.type.ReportParameterType;

import javax.persistence.*;

/**
 * Created by nasanjargal on 8/7/14.
 */
@Entity
@Table(name = "REPORT_PARAMETER", schema = "REPORT", catalog = "PUBLIC")
public class ReportParameterEntity {
    private Integer id;
    private String code;
    private String name;
    private ReportParameterType type;
    private Boolean prompt;
    private String query;
    private ReportEntity report;
    private CityEntity city;
    private DistrictEntity district;
    private ResearchEntity research;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "report_parameter_seq_gen")
    @SequenceGenerator(name = "report_parameter_seq_gen", sequenceName = "report.seq_report_parameter")
    @Column(name = "ID")
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Basic
    @Column(name = "CODE")
    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    @Basic
    @Column(name = "NAME")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Basic
    @Enumerated(EnumType.STRING)
    @Column(name = "TYPE")
    public ReportParameterType getType() {
        return type;
    }

    public void setType(ReportParameterType type) {
        this.type = type;
    }

    @Basic
    @Column(name = "PROMPT")
    public Boolean getPrompt() {
        return prompt;
    }

    public void setPrompt(Boolean prompt) {
        this.prompt = prompt;
    }

    @Basic
    @Column(name = "QUERY")
    public String getQuery() {
        return query;
    }

    public void setQuery(String query) {
        this.query = query;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ReportParameterEntity that = (ReportParameterEntity) o;

        if (code != null ? !code.equals(that.code) : that.code != null) return false;
        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (name != null ? !name.equals(that.name) : that.name != null) return false;
        if (prompt != null ? !prompt.equals(that.prompt) : that.prompt != null) return false;
        if (query != null ? !query.equals(that.query) : that.query != null) return false;
        if (type != that.type) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (code != null ? code.hashCode() : 0);
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (type != null ? type.hashCode() : 0);
        result = 31 * result + (prompt != null ? prompt.hashCode() : 0);
        result = 31 * result + (query != null ? query.hashCode() : 0);
        return result;
    }

    @ManyToOne
    @JoinColumn(name = "REPORT_ID", referencedColumnName = "ID", nullable = false)
    public ReportEntity getReport() {
        return report;
    }

    public void setReport(ReportEntity report) {
        this.report = report;
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
