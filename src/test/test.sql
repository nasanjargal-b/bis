SELECT
  Q_Q3_17.choice_text     AS "Q3_17",
  count(Q_Q4_8_1.numeric) over (partition by Q_Q3_17.choice_text)AS "Q4_8_1",
  count(Q_Q4_8_2.numeric) AS "Q4_8_2",
  count(Q_Q4_8_3.numeric) AS "Q4_8_3"
FROM registration.record_view AS R LEFT JOIN registration.record_question_view AS Q_Q3_17
    ON Q_Q3_17.record_id = R.id AND Q_Q3_17.question_id = 127
  LEFT JOIN registration.record_question_view AS Q_Q4_8_1
    ON Q_Q4_8_1.record_id = R.id AND Q_Q4_8_1.question_id = 100 AND Q_Q4_8_1.numeric >= 0 AND Q_Q4_8_1.numeric <= 50
  LEFT JOIN registration.record_question_view AS Q_Q4_8_2
    ON Q_Q4_8_2.record_id = R.id AND Q_Q4_8_2.question_id = 100 AND Q_Q4_8_2.numeric > 50 AND Q_Q4_8_2.numeric <= 80
  LEFT JOIN registration.record_question_view AS Q_Q4_8_3
    ON Q_Q4_8_3.record_id = R.id AND Q_Q4_8_3.question_id = 100 AND Q_Q4_8_3.numeric > 80
GROUP BY "Q3_17",Q_Q4_8_1.numeric;


SELECT
  Q_Q3_17.choice_text     AS "Q3_17",
  count(Q_Q4_8_1.numeric) AS "Q4_8_1",
  count(Q_Q4_8_2.numeric) AS "Q4_8_2",
  count(Q_Q4_8_3.numeric) AS "Q4_8_3"
FROM registration.record_view AS R LEFT JOIN registration.record_question_view AS Q_Q3_17
    ON Q_Q3_17.record_id = R.id AND Q_Q3_17.question_id = 127
  LEFT JOIN registration.record_question_view AS Q_Q4_8_1
    ON Q_Q4_8_1.record_id = R.id AND Q_Q4_8_1.question_id = 100 AND Q_Q4_8_1.numeric >= 0 AND Q_Q4_8_1.numeric <= 50
  LEFT JOIN registration.record_question_view AS Q_Q4_8_2
    ON Q_Q4_8_2.record_id = R.id AND Q_Q4_8_2.question_id = 100 AND Q_Q4_8_2.numeric > 50 AND Q_Q4_8_2.numeric <= 80
  LEFT JOIN registration.record_question_view AS Q_Q4_8_3
    ON Q_Q4_8_3.record_id = R.id AND Q_Q4_8_3.question_id = 100 AND Q_Q4_8_3.numeric > 80
GROUP BY "Q3_17";