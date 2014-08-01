package com.monsource.bis.blank.component.db;

import java.util.Arrays;
import java.util.List;

/**
 * Created by nasanjargal on 8/1/14.
 */
public class DropTableBuilder extends DbBuilder {
    String name;

    public DropTableBuilder(String name) {
        this.name = name;
    }

    @Override
    public List<String> getQueries() {
        return Arrays.asList("DROP TABLE IF EXISTS " + SCHEMA + "." + name, "DROP SEQUENCE " + SCHEMA + ".SEQ_" + name + " IF EXISTS");
    }
}
