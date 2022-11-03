-- columns for new table: total_count, total_amount, mike_count,
-- mike_amaount, jon_count, jon_amount
-- EXTRACT month from payment_date
-- mike_amount: total payment amount accepted by Mike
-- mike_count: number of payments accepted by Mike
-- jon_count: total number of payments accepted by Jon
-- jon_amount: total amount of payments accepted by Jon
-- total_count:total number of payments

SELECT
EXTRACT (MONTH FROM payment_date) AS month,
COUNT(rental_id) AS total_count, 
SUM (amount) AS total_amount,
SUM(CASE WHEN staff_id = 1 THEN 1 ELSE 0 END) AS mike_count,
SUM(CASE WHEN staff_id = 1 THEN amount ELSE 0 END) AS mike_amount,
SUM(CASE WHEN staff_id = 2 THEN 1 ELSE 0 END) AS jon_count,
SUM(CASE WHEN staff_id = 2 THEN amount ELSE 0 END) AS jon_amount
FROM payment
group by month
order by month; 
