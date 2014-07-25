package com.monsource.bis.blank.component;

import com.monsource.bis.blank.component.db.*;
import com.monsource.bis.data.entity.BlankEntity;
import com.monsource.bis.data.entity.QuestionEntity;
import com.monsource.bis.data.entity.TableViewEntity;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by nasanjargal on 7/21/14.
 */
public class BlankCreateBuilder {

    private List<DbBuilder> dbBuilders = new ArrayList<>();

    public BlankCreateBuilder(BlankEntity blank, List<QuestionEntity> questions, TableViewEntity table, List<TableViewEntity> multiTable) {
        dbBuilders.add(new DropViewBuilder(blank.getId()));
        if (table == null) {
            dbBuilders.add(new CreateTableBuilder(blank.getId(), questions));
        } else {
            dbBuilders.add(new AlterColumnBuilder(blank.getId(), questions, table));
            dbBuilders.add(new DropColumnBuilder(blank.getId(), questions, table, multiTable));
        }
        dbBuilders.add(new AlterViewBuilder(blank.getId(), questions));
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
