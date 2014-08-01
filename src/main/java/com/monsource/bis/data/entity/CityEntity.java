package com.monsource.bis.data.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.monsource.bis.core.data.DataEntity;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

/**
 * Created by nasanjargal on 3/31/14.
 */
@Entity
@Table(name = "city", schema = "public", catalog = "PUBLIC")
public class CityEntity implements DataEntity {
    private Integer id;
    private String name;
    private Set<DistrictEntity> districts;

    public CityEntity() {
    }

    public CityEntity(Integer id) {
        this.id = id;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "city_seq_gen")
    @SequenceGenerator(name = "city_seq_gen", sequenceName = "public.seq_city")
    @Column(name = "id", nullable = false, insertable = true, updatable = true, length = 10, precision = 0)
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Basic
    @Column(name = "name", nullable = false, insertable = true, updatable = true, length = 128, precision = 0)
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

        CityEntity that = (CityEntity) o;

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

    @OneToMany(mappedBy = "city")
    @JsonIgnore
    public Set<DistrictEntity> getDistricts() {
        return districts;
    }

    public void setDistricts(Set<DistrictEntity> districts) {
        this.districts = districts;
    }

}
