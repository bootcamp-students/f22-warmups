-- Create your SELECT statement here
-- count set count as people count
-- group by age

SELECT age, 
  COUNT(*) AS people_count
  FROM people
  GROUP BY age
