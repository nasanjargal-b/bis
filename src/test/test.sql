SELECT
  D.name                AS "$D",
  count(Q_Q4_8_1.Q_100) AS "Q4_8_1",
  count(Q_Q4_8_2.Q_100) AS "Q4_8_2",
  sum(R.Q_93)           AS "Q4_1",
  C_Q_Q3_17.text        AS "Q3_17"
FROM bdata.B01 AS R INNER JOIN registration.research AS RS ON RS.id = R.research_id
  INNER JOIN public.district AS D ON D.id = R.district_id
  INNER JOIN public.city AS C ON C.id = D.city_id
  LEFT JOIN bdata.B01 AS Q_Q4_8_1 ON Q_Q4_8_1.id = R.id AND Q_Q4_8_1.Q_100 >= 0 AND Q_Q4_8_1.Q_100 < 50
  LEFT JOIN bdata.B01 AS Q_Q4_8_2 ON Q_Q4_8_2.id = R.id AND Q_Q4_8_2.Q_100 >= 50
  LEFT JOIN bdata.B01 AS Q_Q3_17 ON Q_Q3_17.id = R.id AND Q_Q3_17.Q_127 = 86
  LEFT JOIN registration.choice AS C_Q_Q3_17 ON C_Q_Q3_17.id = R.Q_127
WHERE C.id = 20 AND R.Q_127 IN (86, 87, 88)
GROUP BY "$D", "Q3_17"
ORDER BY "$D", "Q3_17"