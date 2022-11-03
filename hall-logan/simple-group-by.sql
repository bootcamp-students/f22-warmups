-- Create your SELECT statement here
SELECT age, COUNT(name) as people_count from people
GROUP BY age
