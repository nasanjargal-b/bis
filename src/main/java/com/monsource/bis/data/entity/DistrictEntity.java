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
@Table(name = "district", schema = "public", catalog = "PUBLIC")
public class DistrictEntity implements DataEntity {
    private Integer id;
    private String name;
    private Set<AccountEntity> accounts;
    private Boolean cityCenter;
    private CityEntity city;

    public DistrictEntity() {
    }

    public DistrictEntity(Integer id) {
        this.id = id;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "district_seq_gen")
    @SequenceGenerator(name = "district_seq_gen", sequenceName = "public.seq_district")
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
    @Column(name = "CITY_CENTER", nullable = true, insertable = true, updatable = true)
    public Boolean getCityCenter() {
        return cityCenter;
    }

    public void setCityCenter(Boolean cityCenter) {
        this.cityCenter = cityCenter;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        DistrictEntity that = (DistrictEntity) o;

        if (accounts != null ? !accounts.equals(that.accounts) : that.accounts != null) return false;
        if (cityCenter != null ? !cityCenter.equals(that.cityCenter) : that.cityCenter != null) return false;
        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (name != null ? !name.equals(that.name) : that.name != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (accounts != null ? accounts.hashCode() : 0);
        result = 31 * result + (cityCenter != null ? cityCenter.hashCode() : 0);
        return result;
    }

    @OneToMany(mappedBy = "district")
    @JsonIgnore
    public Set<AccountEntity> getAccounts() {
        return accounts;
    }

    public void setAccounts(Set<AccountEntity> accounts) {
        this.accounts = accounts;
    }

    @ManyToOne()
    @JoinColumn(name = "city_id", referencedColumnName = "id", nullable = false)
    public CityEntity getCity() {
        return city;
    }

    public void setCity(CityEntity city) {
        this.city = city;
    }

}
