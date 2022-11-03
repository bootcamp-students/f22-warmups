SELECT 
  EXTRACT(MONTH FROM payment_date) as month,
  COUNT(rental_id) as total_count,
  SUM(amount) as total_amount,
  SUM(CASE WHEN staff_id = 1 THEN 1 ELSE 0 END) as mike_count,
  SUM(CASE WHEN staff_id = 1 THEN amount ELSE 0 END) as mike_amount,
  SUM(CASE WHEN staff_id = 2 THEN 1 ELSE 0 END) as jon_count,
  SUM(CASE WHEN staff_id = 2 THEN amount ELSE 0 END) as jon_amount
  FROM payment
  GROUP BY month
  ORDER BY month
