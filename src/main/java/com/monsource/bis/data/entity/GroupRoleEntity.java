package com.monsource.bis.data.entity;

import com.monsource.bis.core.data.DataEntity;
import com.monsource.bis.core.security.Role;

import javax.persistence.*;

/**
 * Created by nasanjargal on 3/31/14.
 */
@javax.persistence.Entity
@Table(name = "group_role", schema = "public",catalog = "PUBLIC")
public class GroupRoleEntity implements DataEntity {
    private Integer id;
    private Role role;
    private GroupEntity group;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "group_role_seq_gen")
    @SequenceGenerator(name = "group_role_seq_gen", sequenceName = "public.seq_group_role")
    @Column(name = "id", nullable = true, insertable = true, updatable = true, length = 255, precision = 0)
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Basic
    @Column(name = "role")
    @Enumerated(EnumType.STRING)
    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        GroupRoleEntity that = (GroupRoleEntity) o;

        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (role != null ? !role.equals(that.role) : that.role != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (role != null ? role.hashCode() : 0);
        return result;
    }

    @javax.persistence.ManyToOne
    @JoinColumn(name = "group_id",referencedColumnName = "id",nullable = false)
    public GroupEntity getGroup() {
        return group;
    }

    public void setGroup(GroupEntity group) {
        this.group = group;
    }
}
