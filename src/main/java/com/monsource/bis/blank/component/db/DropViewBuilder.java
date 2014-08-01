package com.monsource.bis.blank.component.db;

import java.util.Arrays;
import java.util.List;

/**
 * Created by nasanjargal on 7/25/14.
 */
public class DropViewBuilder extends DbBuilder {
    private String name;

    public DropViewBuilder(String name) {
        this.name = name;
    }

    @Override
    public List<String> getQueries() {
        return Arrays.asList("DROP VIEW bdata.V_" + name + " IF EXISTS");
    }
}
