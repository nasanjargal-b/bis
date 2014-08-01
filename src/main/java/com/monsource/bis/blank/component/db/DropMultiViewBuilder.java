package com.monsource.bis.blank.component.db;

import com.monsource.bis.data.entity.QuestionEntity;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by nasanjargal on 8/1/14.
 */
public class DropMultiViewBuilder extends DbBuilder {

    private String queryDropTable = "DROP TABLE IF EXISTS " + SCHEMA + ".%s";
    private String queryDropViewTable = "DROP VIEW IF EXISTS " + SCHEMA + ".%s";

    private List<String> queries = new ArrayList<>();

    public DropMultiViewBuilder(String name, List<QuestionEntity> questions) {
        for (QuestionEntity question : questions) {
            queries.add(String.format(queryDropViewTable, "V_" + name + "_" + question.getCode()));
            queries.add(String.format(queryDropTable, name + "_" + question.getId()));
        }
    }

    @Override
    public List<String> getQueries() {
        return queries;
    }
}
