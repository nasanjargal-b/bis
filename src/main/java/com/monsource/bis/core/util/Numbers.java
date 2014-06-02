package com.monsource.bis.core.util;

/**
 * Created by nasanjargal on 5/14/14.
 */
public class Numbers {

    private Numbers() {
    }

    public static boolean isNumber(String str) {
        if(str == null) return false;
        try {
            double num = Double.parseDouble(str);
        } catch (NumberFormatException e) {
            return false;
        }

        return true;
    }

}
