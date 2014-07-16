package com.monsource.bis.test.core;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by nasanjargal on 5/30/14.
 */
public class TestMessageClass {
    public static void main(String[] args) {
        Map map = new HashMap();

        System.out.println(map.put("a",10));
        System.out.println(map.put("a",20));
    }
}
