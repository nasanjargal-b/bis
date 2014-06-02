package com.monsource.bis.data.entity;

import com.monsource.bis.core.data.DataEntity;

import javax.persistence.*;
import java.util.Set;

/**
 * Created by nasanjargal on 3/31/14.
 */
@javax.persistence.Entity
@Table(name = "group", schema = "public",catalog = "bis")
public class GroupEntity implements DataEntity {
    private Integer id;
    private String name;
    private String description;
    private Set<GroupRoleEntity> groupRoles;
    private Set<AccountEntity> accounts;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = true, insertable = true, updatable = true, length = 255, precision = 0)
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Basic
    @Column(name = "name", nullable = true, insertable = true, updatable = true, length = 255, precision = 0)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Basic
    @Column(name = "description", nullable = true, insertable = true, updatable = true, length = 255, precision = 0)
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        GroupEntity that = (GroupEntity) o;

        if (description != null ? !description.equals(that.description) : that.description != null) return false;
        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (name != null ? !name.equals(that.name) : that.name != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (description != null ? description.hashCode() : 0);
        return result;
    }

    @javax.persistence.Transient
    public Set<GroupRoleEntity> getGroupRoles() {
        return groupRoles;
    }

    public void setGroupRoles(Set<GroupRoleEntity> groupRoles) {
        this.groupRoles = groupRoles;
    }

    @javax.persistence.Transient
    public Set<AccountEntity> getAccounts() {
        return accounts;
    }

    public void setAccounts(Set<AccountEntity> accounts) {
        this.accounts = accounts;
    }
}
