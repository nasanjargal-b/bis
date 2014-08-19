SELECT
  sum("weight"),
  onuud
FROM (SELECT
        sum("weight") AS "weight",
        onuud
      FROM (SELECT
              ("weight") AS "weight",
              "N6_1"     AS onuud
            FROM bdata.v_b03
            WHERE "CITY_ID" = 1 AND "S5_CODE" <= '2' AND "N6_2_CODE" != 1 AND "N6_13_CODE" > 1 AND "L5_9" > 0 AND
                  "N6_14" > 29 AND "N6_1" = 2014 AND "N6_15_2" <= "orlogo45"
            UNION ALL SELECT
                        ("weight") AS "weight",
                        "N6_1"     AS onuud
                      FROM bdata.v_b03
                      WHERE
                        "CITY_ID" = 1 AND "S5_CODE" <= '2' AND "N6_2_CODE" != 1 AND "N6_13_CODE" > 1 AND "L5_9" > 0 AND
                        "N6_16" > 29 AND "N6_1" != 2014 AND "N6_17_2" <= "orlogo45")
      GROUP BY onuud
      UNION ALL SELECT
                  sum("weight") AS "weight",
                  "N6_1"        AS onuud
                FROM bdata.v_b03
                WHERE "CITY_ID" = 1 AND "S5_CODE" <= '2' AND "N6_2_CODE" != 1 AND "N6_13_CODE" = 1
                GROUP BY onuud)
GROUP BY onuud