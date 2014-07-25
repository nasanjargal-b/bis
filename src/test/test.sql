SELECT
  r.id          AS id,
  r.research_id AS research_id,
  r.district_id AS district_id,
  d.city_id     AS city_id,
  rs.name       AS research_name,
  rs.year       AS research_year,
  d.name        AS district_name,
  c.name        AS city_name,
  Q_7550        AS "Q01",
  Q_7550_CODE   AS "Q01_CODE",
  Q_7551        AS "Q02",
  Q_7551_CODE   AS "Q02_CODE",
  Q_7552        AS "Q03",
  Q_7552_CODE   AS "Q03_CODE",
  Q_7651        AS "Q05",
  Q_7750        AS "D1",
  Q_7751        AS "T1"
FROM bdata.Test AS r INNER JOIN registration.research AS rs ON rs.id = r.research_id
  INNER JOIN public.district AS d ON r.district_id = d.id
  INNER JOIN public.city AS c ON d.city_id = c.id
  LEFT JOIN registration.choice AS Q_7550_CODE ON Q_7550_CODE.id = r.Q_7550
  LEFT JOIN registration.choice AS Q_7551_CODE ON Q_7551_CODE.id = r.Q_7551
  LEFT JOIN registration.choice AS Q_7552_CODE ON Q_7552_CODE.id = r.Q_7552;


  select * from bdata.test