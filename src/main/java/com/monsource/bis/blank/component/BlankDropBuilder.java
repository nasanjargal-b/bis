package com.monsource.bis.blank.component;

import com.monsource.bis.blank.component.db.*;
import com.monsource.bis.data.entity.BlankEntity;
import com.monsource.bis.data.entity.QuestionEntity;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by nasanjargal on 8/1/14.
 */
public class BlankDropBuilder {

    private List<DbBuilder> dbBuilders = new ArrayList<>();

    public BlankDropBuilder(BlankEntity blank, List<QuestionEntity> questions) {
        dbBuilders.add(new DropMultiViewBuilder(blank.getId(), questions));
        dbBuilders.add(new DropViewBuilder(blank.getId()));
        dbBuilders.add(new DropTableBuilder(blank.getId()));
    }

    public List<String> getQueries() {
        ArrayList<String> queries = new ArrayList<>();

        for (DbBuilder dbBuilder : dbBuilders) {
            List<String> dbQueries = dbBuilder.getQueries();
            if (dbQueries != null && dbQueries.size() > 0)
                queries.addAll(dbQueries);
        }

        return queries;
    }
}
