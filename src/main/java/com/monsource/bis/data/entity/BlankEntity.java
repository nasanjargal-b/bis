package com.monsource.bis.data.entity;

import com.monsource.bis.core.data.DataEntity;

import javax.persistence.*;
import java.util.Set;

/**
 * Created by nasanjargal on 5/14/14.
 */
@Entity
@Table(name = "blank", schema = "registration", catalog = "bis")
public class BlankEntity implements DataEntity {
    private String id;
    private String name;
    private String questions;
    private BlankGroupEntity blankGroup;
    private Set<ResearchEntity> researches;

    @Id
    @Column(name = "id")
    public String getId() {
        return id;
    }

    public void setId(String id) {
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
    @Column(name = "questions", columnDefinition = "varying")
    public String getQuestions() {
        return questions;
    }

    public void setQuestions(String questions) {
        this.questions = questions;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        BlankEntity that = (BlankEntity) o;

        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (name != null ? !name.equals(that.name) : that.name != null) return false;
        if (questions != null ? !questions.equals(that.questions) : that.questions != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (questions != null ? questions.hashCode() : 0);
        return result;
    }

    @ManyToOne
    @JoinColumn(name = "blank_group_id", referencedColumnName = "id", nullable = false)
    public BlankGroupEntity getBlankGroup() {
        return blankGroup;
    }

    public void setBlankGroup(BlankGroupEntity blankGroup) {
        this.blankGroup = blankGroup;
    }

    @ManyToMany(mappedBy = "blanks")
    public Set<ResearchEntity> getResearches() {
        return researches;
    }

    public void setResearches(Set<ResearchEntity> researches) {
        this.researches = researches;
    }
}
