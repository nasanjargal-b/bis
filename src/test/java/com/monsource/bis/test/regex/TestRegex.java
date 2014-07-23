package com.monsource.bis.test.regex;

import org.junit.Test;

import java.util.HashMap;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Created by nasanjargal on 7/23/14.
 */
public class TestRegex {

    @Test
    public void regexQuery() {
        String query = "SELECT b.$C{Q3_2} AS q3_2,b.$c{Q3_1} AS q3_1 FROM $B{B01} WHERE district_id = $P{districtId}";
        System.out.println(query);
        Map<String, String> changer = new HashMap<>();

        findColumn(query, changer);
        findBlank(query, changer);
        findParameter(query, changer);

        for (String origin : changer.keySet()) {
            String value = changer.get(origin);
            query = query.replace(origin, value);
        }


        System.out.println(query);
    }

    private void findParameter(String query, Map<String, String> changer) {
        Pattern pattern = Pattern.compile("\\$[Pp]?\\{[A-Za-z0-9_]+\\}");
        Matcher matcher = pattern.matcher(query);

        while (matcher.find()) {
            String column = query.substring(matcher.start(), matcher.end());
            String newColumn = column.replaceAll("\\$[Pp]?\\{", ":").replaceAll("\\}", "");
            changer.put(column, newColumn);
        }
    }

    private void findBlank(String query, Map<String, String> changer) {
        Pattern pattern = Pattern.compile("\\$[Bb]?\\{[A-Za-z0-9_]+\\}");
        Matcher matcher = pattern.matcher(query);

        while (matcher.find()) {
            String column = query.substring(matcher.start(), matcher.end());
            String newColumn = column.replaceAll("\\$[Bb]?\\{", "bdata.V_").replaceAll("\\}", "");
            changer.put(column, newColumn);
        }
    }

    private void findColumn(String query, Map<String, String> changer) {
        Pattern pattern = Pattern.compile("\\$[Cc]?\\{[A-Za-z0-9_]+\\}");
        Matcher matcher = pattern.matcher(query);

        while (matcher.find()) {
            String column = query.substring(matcher.start(), matcher.end());
            String newColumn = column.replaceAll("\\$[Cc]?\\{", "\"").replaceAll("\\}", "\"");
            changer.put(column, newColumn);
        }
    }

}
