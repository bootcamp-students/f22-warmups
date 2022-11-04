-- Create your SELECT statement here
SELECT age, COUNT(age) AS people_count FROM people

GROUP BY age
