package com.monsource.bis.data.entity;

import com.monsource.bis.core.data.DataEntity;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.List;

/**
 * Created by nasanjargal on 6/20/14.
 */
@Entity
@Table(name = "record", schema = "registration", catalog = "bis")
public class RecordEntity implements DataEntity {
    private Integer id;
    private Timestamp createdDate;
    private AccountEntity account;
    private BlankEntity blank;
    private ResearchEntity research;
    private List<RecordQuestionEntity> recordQuestions;

    @Id
    @Column(name = "id")
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Basic
    @Column(name = "created_date")
    public Timestamp getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Timestamp createdDate) {
        this.createdDate = createdDate;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        RecordEntity that = (RecordEntity) o;

        if (createdDate != null ? !createdDate.equals(that.createdDate) : that.createdDate != null) return false;
        if (id != null ? !id.equals(that.id) : that.id != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (createdDate != null ? createdDate.hashCode() : 0);
        return result;
    }

    @ManyToOne
    @JoinColumn(name = "account_id", referencedColumnName = "id", nullable = false)
    public AccountEntity getAccount() {
        return account;
    }

    public void setAccount(AccountEntity account) {
        this.account = account;
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
    @JoinColumn(name = "research_id", referencedColumnName = "id", nullable = false)
    public ResearchEntity getResearch() {
        return research;
    }

    public void setResearch(ResearchEntity research) {
        this.research = research;
    }

    @OneToMany(mappedBy = "record")
    public List<RecordQuestionEntity> getRecordQuestions() {
        return recordQuestions;
    }

    public void setRecordQuestions(List<RecordQuestionEntity> recordQuestions) {
        this.recordQuestions = recordQuestions;
    }
}
