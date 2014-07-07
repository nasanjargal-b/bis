package com.monsource.bis.data.entity;

import com.monsource.bis.core.data.DataEntity;

import javax.persistence.*;
import java.util.List;

/**
 * Created by nasanjargal on 7/6/14.
 */
@Entity
@Table(name = "report_chart", schema = "report", catalog = "bis")
public class ReportChartEntity implements DataEntity {
    private Integer id;
    private ReportQuestionEntity label;
    private List<ReportQuestionEntity> datas;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "report_chart_seq_gen")
    @SequenceGenerator(name = "report_chart_seq_gen", sequenceName = "report.report_chart_id_seq")
    @Column(name = "id")
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ReportChartEntity that = (ReportChartEntity) o;

        if (id != null ? !id.equals(that.id) : that.id != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

    @ManyToOne
    @JoinColumn(name = "label", referencedColumnName = "id", nullable = false)
    public ReportQuestionEntity getLabel() {
        return label;
    }

    public void setLabel(ReportQuestionEntity label) {
        this.label = label;
    }

    @ManyToMany
    @JoinTable(name = "report_chart_datas", catalog = "bis", schema = "report", joinColumns = @JoinColumn(name = "report_chart_id", referencedColumnName = "id", nullable = false), inverseJoinColumns = @JoinColumn(name = "report_question_id", referencedColumnName = "id", nullable = false))
    public List<ReportQuestionEntity> getDatas() {
        return datas;
    }

    public void setDatas(List<ReportQuestionEntity> datas) {
        this.datas = datas;
    }
}
