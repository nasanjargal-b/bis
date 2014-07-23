SELECT
  r.id          AS id,
  r.research_id AS research_id,
  r.district_id AS district_id,
  d.city_id     AS city_id,
  rs.name       AS research_name,
  rs.year       AS research_year,
  d.name        AS district_name,
  c.name        AS city_name,
  Q_53          AS "Q1_1",
  Q_54          AS "Q1_2",
  Q_55          AS "Q1_3",
  Q_56          AS "Q1_4",
  Q_57          AS "Q1_5",
  Q_58          AS "Q1_6",
  Q_59          AS "Q1_7",
  Q_61          AS "Q1_8",
  Q_62          AS "Q2_1",
  Q_63          AS "Q2_2",
  Q_64          AS "Q2_3",
  Q_70          AS "Q3_1",
  Q_71          AS "Q3_2",
  Q_72          AS "Q3_3",
  Q_73          AS "Q3_4",
  Q_74          AS "Q3_5",
  Q_75          AS "Q3_6",
  Q_76          AS "Q3_7",
  Q_77          AS "Q3_8",
  Q_78          AS "Q3_9",
  Q_79          AS "Q3_10",
  Q_80          AS "Q3_11",
  Q_81          AS "Q3_12",
  Q_82          AS "Q3_13",
  Q_83          AS "Q3_14",
  C_Q3_15.code  AS "Q3_15",
  Q_85          AS "Q3_16",
  C_Q3_17.code  AS "Q3_17",
  Q_7500        AS "Q3_18",
  Q_93          AS "Q4_1",
  Q_101         AS "Q4_2_1",
  Q_102         AS "Q4_2_2",
  Q_103         AS "Q4_2_3",
  Q_104         AS "Q4_3_1",
  Q_105         AS "Q4_3_2",
  Q_106         AS "Q4_3_3",
  Q_107         AS "Q4_4_1",
  Q_108         AS "Q4_4_2",
  Q_109         AS "Q4_4_3",
  Q_110         AS "Q4_5_1",
  Q_111         AS "Q4_5_2",
  Q_112         AS "Q4_5_3",
  Q_113         AS "Q4_6_1",
  Q_114         AS "Q4_6_2",
  Q_115         AS "Q4_6_3",
  Q_99          AS "Q4_7",
  Q_100         AS "Q4_8",
  C_Q5_1.code   AS "Q5_1",
  C_Q5_2.code   AS "Q5_2",
  C_Q5_3.code   AS "Q5_3",
  C_Q5_4.code   AS "Q5_4",
  C_Q5_5.code   AS "Q5_5",
  C_Q5_6.code   AS "Q5_6",
  C_Q5_7.code   AS "Q5_7",
  C_Q6_1.code   AS "Q6_1",
  C_Q6_2.code   AS "Q6_2",
  C_Q6_3.code   AS "Q6_3",
  C_Q6_4.code   AS "Q6_4"
FROM bdata.B01 AS r INNER JOIN registration.research AS rs ON rs.id = r.research_id
  INNER JOIN public.district AS d ON r.district_id = d.id
  INNER JOIN public.city AS c ON d.city_id = c.id
  LEFT JOIN registration.choice AS C_Q3_15 ON C_Q3_15.id = r.Q_84
  LEFT JOIN registration.choice AS C_Q3_17 ON C_Q3_17.id = r.Q_127
  LEFT JOIN registration.choice AS C_Q5_1 ON C_Q5_1.id = r.Q_116
  LEFT JOIN registration.choice AS C_Q5_2 ON C_Q5_2.id = r.Q_117
  LEFT JOIN registration.choice AS C_Q5_3 ON C_Q5_3.id = r.Q_118
  LEFT JOIN registration.choice AS C_Q5_4 ON C_Q5_4.id = r.Q_119
  LEFT JOIN registration.choice AS C_Q5_5 ON C_Q5_5.id = r.Q_120
  LEFT JOIN registration.choice AS C_Q5_6 ON C_Q5_6.id = r.Q_121
  LEFT JOIN registration.choice AS C_Q5_7 ON C_Q5_7.id = r.Q_122
  LEFT JOIN registration.choice AS C_Q6_1 ON C_Q6_1.id = r.Q_123
  LEFT JOIN registration.choice AS C_Q6_2 ON C_Q6_2.id = r.Q_124
  LEFT JOIN registration.choice AS C_Q6_3 ON C_Q6_3.id = r.Q_125
  LEFT JOIN registration.choice AS C_Q6_4 ON C_Q6_4.id = r.Q_126