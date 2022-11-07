SELECT
  EXTRACT(MONTH FROM payment_date) AS month,
  COUNT(rental_id) AS total_count,
  SUM(amount) AS total_amount,
  SUM(CASE WHEN staff_id = 1 THEN 1 END) AS mike_count,
  SUM(CASE WHEN staff_id = 1 THEN amount END) AS mike_amount,
  SUM(CASE WHEN staff_id = 2 THEN 1 END) AS jon_count,
  SUM(CASE WHEN staff_id = 2 THEN amount END) AS jon_amount
FROM payment
GROUP BY month
ORDER BY month;
