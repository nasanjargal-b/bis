package com.monsource.bis.data.entity;

import com.monsource.bis.core.data.DataEntity;

import javax.persistence.*;
import java.util.Set;

/**
 * Created by nasanjargal on 5/14/14.
 */
@Entity
@Table(name = "blank_group", schema = "registration", catalog = "bis")
public class BlankGroupEntity implements DataEntity {
    private String id;
    private String name;
    private Set<BlankEntity> blanks;
    private BlankGroupEntity blankGroup;
    private Set<BlankGroupEntity> blankGroups;

    public BlankGroupEntity() {
    }

    public BlankGroupEntity(String id) {
        this.id = id;
    }

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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        BlankGroupEntity that = (BlankGroupEntity) o;

        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (name != null ? !name.equals(that.name) : that.name != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        return result;
    }

    @OneToMany(mappedBy = "blankGroup")
    public Set<BlankEntity> getBlanks() {
        return blanks;
    }

    public void setBlanks(Set<BlankEntity> blanks) {
        this.blanks = blanks;
    }

    @ManyToOne
    @JoinColumn(name = "parent_id", referencedColumnName = "id")
    public BlankGroupEntity getBlankGroup() {
        return blankGroup;
    }

    public void setBlankGroup(BlankGroupEntity blankGroup) {
        this.blankGroup = blankGroup;
    }

    @OneToMany(mappedBy = "blankGroup")
    public Set<BlankGroupEntity> getBlankGroups() {
        return blankGroups;
    }

    public void setBlankGroups(Set<BlankGroupEntity> blankGroups) {
        this.blankGroups = blankGroups;
    }
}
