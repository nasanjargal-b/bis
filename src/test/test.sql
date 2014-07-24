SELECT
  'Борлуулах талбай' AS name,
  SUM("Q3_13")       AS talbai
FROM bdata.V_B01
UNION
SELECT
  'Орон сууцны зориулалтаар борлуулах талбай' AS name,
  SUM("Q3_14")                                AS talbai
FROM bdata.V_B01
UNION
SELECT
  'Нийт барилгын талбай'      AS name,
  SUM("Q3_13") + SUM("Q3_13") AS talbai AS talbai FROM bdata.V_B01 LIMIT ?