SELECT
  count(Q_Q4_8_1.Q_100) AS "Q4_8_1",
  count(Q_Q4_8_2.Q_100) AS "Q4_8_2",
  sum(R.Q_93)           AS "Q4_1",
  C_Q_Q3_17.text   AS "Q3_17"
FROM
  bdata.B01 AS R
  LEFT JOIN bdata.B01 AS Q_Q4_8_1 ON Q_Q4_8_1.id = R.id AND Q_Q4_8_1.Q_100 >= 0 AND Q_Q4_8_1.Q_100 < 50
  LEFT JOIN bdata.B01 AS Q_Q4_8_2 ON Q_Q4_8_2.id = R.id AND Q_Q4_8_2.Q_100 >= 50
  LEFT JOIN bdata.B01 AS Q_Q3_17 ON Q_Q3_17.id = R.id AND Q_Q3_17.Q_127 = 86
  LEFT JOIN registration.choice AS C_Q_Q3_17 ON Q_Q3_17.Q_127 = C_Q_Q3_17.id
GROUP BY "Q3_17";

SELECT
  Q_100
FROM bdata.b01