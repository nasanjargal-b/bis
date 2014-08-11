CREATE VIEW bdata.V_s02 AS
  SELECT
    niit."weight_horoogoor",
    niit."Payment_FU_TEXT",
    niit."Payment_FU_CODE",
    niit."N5_1_CODE",
    niit."N5_1_TEXT",
    niit."DISTRICT_ID",
    niit."DISTRICT_NAME",
    niit."N5_14",
    niit."N5_12_TEXT",
    niit."N5_12_CODE",
    niit."N5_2_CODE",
    niit."N5_2_TEXT",
    niit."N5_9_CODE",
    niit."N5_9_TEXT",
    niit."S6_CODE",
    niit."S6_TEXT",
    niit."N5_6$1_CODE",
    niit."N5_6$1_TEXT",
    niit."N5_6$2_CODE",
    niit."N5_6$2_TEXT",
    niit."N5_6$3_CODE",
    niit."N5_6$3_TEXT",
    niit."N5_6$4_CODE",
    niit."N5_6$4_TEXT",
    niit."N5_6$5_CODE",
    niit."N5_6$5_TEXT",
    niit."N5_6$6_CODE",
    niit."N5_6$6_TEXT",
    niit."CITY_ID",
    niit."CITY_NAME"
  FROM (
         SELECT
           (CASE WHEN (("R4_A_1_2" + "R4_B_1_2" + "R4_B_2_2" + "R4_B_3_2" + "R4_B_91_BUSAD_ORLOGO_2") / 12 * 45 / 100)
                      >= "N5_19_2" THEN "weight_horoogoor"
            ELSE 0 END) AS "weight_horoogoor",
           "Payment_FU_TEXT",
           "Payment_FU_CODE",
           "N5_1_CODE",
           "N5_1_TEXT",
           "DISTRICT_ID",
           "DISTRICT_NAME",
           "N5_14",
           "N5_12_TEXT",
           "N5_12_CODE",
           "N5_2_CODE",
           "N5_2_TEXT",
           "N5_9_CODE",
           "N5_9_TEXT",
           "S6_CODE",
           "S6_TEXT",
           "N5_6$1_CODE",
           "N5_6$1_TEXT",
           "N5_6$2_CODE",
           "N5_6$2_TEXT",
           "N5_6$3_CODE",
           "N5_6$3_TEXT",
           "N5_6$4_CODE",
           "N5_6$4_TEXT",
           "N5_6$5_CODE",
           "N5_6$5_TEXT",
           "N5_6$6_CODE",
           "N5_6$6_TEXT",
           "CITY_ID",
           "CITY_NAME"
         FROM bdata.v_r02
         WHERE
           "Payment_FU_CODE" = '3' AND "N5_1_CODE" = '1' AND "N5_17" > 29 AND
           (
             "F1_7$01_CODE" = '1' OR
             "F1_7$02_CODE" = '1' OR
             "F1_7$03_CODE" = '1' OR
             "F1_7$04_CODE" = '1' OR
             "F1_7$05_CODE" = '1' OR
             "F1_7$06_CODE" = '1' OR
             "F1_7$07_CODE" = '1' OR
             "F1_7$08_CODE" = '1' OR
             "F1_7$09_CODE" = '1' OR
             "F1_7$10_CODE" = '1' OR
             "F1_7$11_CODE" = '1' OR
             "F1_7$12_CODE" = '1'
           )
         UNION ALL
         SELECT
           (CASE WHEN (("R4_A_1_2" + "R4_B_1_2" + "R4_B_2_2" + "R4_B_3_2" + "R4_B_91_BUSAD_ORLOGO_2") / 12 * 45 / 100)
                      >= "N5_23_2" THEN "weight_horoogoor"
            ELSE 0 END) AS "weight_horoogoor",
           "Payment_FU_TEXT",
           "Payment_FU_CODE",
           "N5_1_CODE",
           "N5_1_TEXT",
           "DISTRICT_ID",
           "DISTRICT_NAME",
           "N5_14",
           "N5_12_TEXT",
           "N5_12_CODE",
           "N5_2_CODE",
           "N5_2_TEXT",
           "N5_9_CODE",
           "N5_9_TEXT",
           "S6_CODE",
           "S6_TEXT",
           "N5_6$1_CODE",
           "N5_6$1_TEXT",
           "N5_6$2_CODE",
           "N5_6$2_TEXT",
           "N5_6$3_CODE",
           "N5_6$3_TEXT",
           "N5_6$4_CODE",
           "N5_6$4_TEXT",
           "N5_6$5_CODE",
           "N5_6$5_TEXT",
           "N5_6$6_CODE",
           "N5_6$6_TEXT",
           "CITY_ID",
           "CITY_NAME"
         FROM bdata.v_r02
         WHERE
           "Payment_FU_CODE" = '3' AND "N5_1_CODE" != '1' AND "N5_21" > 29 AND
           (
             "F1_7$01_CODE" = '1' OR
             "F1_7$02_CODE" = '1' OR
             "F1_7$03_CODE" = '1' OR
             "F1_7$04_CODE" = '1' OR
             "F1_7$05_CODE" = '1' OR
             "F1_7$06_CODE" = '1' OR
             "F1_7$07_CODE" = '1' OR
             "F1_7$08_CODE" = '1' OR
             "F1_7$09_CODE" = '1' OR
             "F1_7$10_CODE" = '1' OR
             "F1_7$11_CODE" = '1' OR
             "F1_7$12_CODE" = '1'
           )
       ) AS niit
  UNION ALL
  SELECT
    niit."weight_horoogoor",
    niit."Payment_FU_TEXT",
    niit."Payment_FU_CODE",
    niit."N5_1_CODE",
    niit."N5_1_TEXT",
    niit."DISTRICT_ID",
    niit."DISTRICT_NAME",
    niit."N5_14",
    niit."N5_12_TEXT",
    niit."N5_12_CODE",
    niit."N5_2_CODE",
    niit."N5_2_TEXT",
    niit."N5_9_CODE",
    niit."N5_9_TEXT",
    niit."S6_CODE",
    niit."S6_TEXT",
    niit."N5_6$1_CODE",
    niit."N5_6$1_TEXT",
    niit."N5_6$2_CODE",
    niit."N5_6$2_TEXT",
    niit."N5_6$3_CODE",
    niit."N5_6$3_TEXT",
    niit."N5_6$4_CODE",
    niit."N5_6$4_TEXT",
    niit."N5_6$5_CODE",
    niit."N5_6$5_TEXT",
    niit."N5_6$6_CODE",
    niit."N5_6$6_TEXT",
    niit."CITY_ID",
    niit."CITY_NAME"
  FROM (
         SELECT
           "weight_horoogoor" AS "weight_horoogoor",
           "Payment_FU_TEXT",
           "Payment_FU_CODE",
           "N5_1_CODE",
           "N5_1_TEXT",
           "DISTRICT_ID",
           "DISTRICT_NAME",
           "N5_14",
           "N5_12_TEXT",
           "N5_12_CODE",
           "N5_2_CODE",
           "N5_2_TEXT",
           "N5_9_CODE",
           "N5_9_TEXT",
           "S6_CODE",
           "S6_TEXT",
           "N5_6$1_CODE",
           "N5_6$1_TEXT",
           "N5_6$2_CODE",
           "N5_6$2_TEXT",
           "N5_6$3_CODE",
           "N5_6$3_TEXT",
           "N5_6$4_CODE",
           "N5_6$4_TEXT",
           "N5_6$5_CODE",
           "N5_6$5_TEXT",
           "N5_6$6_CODE",
           "N5_6$6_TEXT",
           "CITY_ID",
           "CITY_NAME"
         FROM bdata.v_r02
         WHERE "Payment_FU_CODE" = '4' AND "S2_11_CODE" = '3'
         UNION ALL
         SELECT
           "weight_horoogoor" AS "weight_horoogoor",
           "Payment_FU_TEXT",
           "Payment_FU_CODE",
           "N5_1_CODE",
           "N5_1_TEXT",
           "DISTRICT_ID",
           "DISTRICT_NAME",
           "N5_14",
           "N5_12_TEXT",
           "N5_12_CODE",
           "N5_2_CODE",
           "N5_2_TEXT",
           "N5_9_CODE",
           "N5_9_TEXT",
           "S6_CODE",
           "S6_TEXT",
           "N5_6$1_CODE",
           "N5_6$1_TEXT",
           "N5_6$2_CODE",
           "N5_6$2_TEXT",
           "N5_6$3_CODE",
           "N5_6$3_TEXT",
           "N5_6$4_CODE",
           "N5_6$4_TEXT",
           "N5_6$5_CODE",
           "N5_6$5_TEXT",
           "N5_6$6_CODE",
           "N5_6$6_TEXT",
           "CITY_ID",
           "CITY_NAME"
         FROM bdata.v_r02
         WHERE "Payment_FU_CODE" = '4' AND "S2_11_CODE" = '2'
       ) AS niit
  UNION ALL
  SELECT
    "weight_horoogoor" AS "weight_horoogoor",
    "Payment_FU_TEXT",
    "Payment_FU_CODE",
    "N5_1_CODE",
    "N5_1_TEXT",
    "DISTRICT_ID",
    "DISTRICT_NAME",
    "N5_14",
    "N5_12_TEXT",
    "N5_12_CODE",
    "N5_2_CODE",
    "N5_2_TEXT",
    "N5_9_CODE",
    "N5_9_TEXT",
    "S6_CODE",
    "S6_TEXT",
    "N5_6$1_CODE",
    "N5_6$1_TEXT",
    "N5_6$2_CODE",
    "N5_6$2_TEXT",
    "N5_6$3_CODE",
    "N5_6$3_TEXT",
    "N5_6$4_CODE",
    "N5_6$4_TEXT",
    "N5_6$5_CODE",
    "N5_6$5_TEXT",
    "N5_6$6_CODE",
    "N5_6$6_TEXT",
    "CITY_ID",
    "CITY_NAME"
  FROM bdata.v_r02
  WHERE "Payment_FU_CODE" = '2' AND "S2_2_CODE" = '1'
  UNION ALL
  SELECT
    "weight_horoogoor" AS "weight_horoogoor",
    "Payment_FU_TEXT",
    "Payment_FU_CODE",
    "N5_1_CODE",
    "N5_1_TEXT",
    "DISTRICT_ID",
    "DISTRICT_NAME",
    "N5_14",
    "N5_12_TEXT",
    "N5_12_CODE",
    "N5_2_CODE",
    "N5_2_TEXT",
    "N5_9_CODE",
    "N5_9_TEXT",
    "S6_CODE",
    "S6_TEXT",
    "N5_6$1_CODE",
    "N5_6$1_TEXT",
    "N5_6$2_CODE",
    "N5_6$2_TEXT",
    "N5_6$3_CODE",
    "N5_6$3_TEXT",
    "N5_6$4_CODE",
    "N5_6$4_TEXT",
    "N5_6$5_CODE",
    "N5_6$5_TEXT",
    "N5_6$6_CODE",
    "N5_6$6_TEXT",
    "CITY_ID",
    "CITY_NAME"
  FROM bdata.v_r02
  WHERE "Payment_FU_CODE" = '1'