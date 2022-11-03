SELECT 
  p.age, 
  COUNT(p.age) AS people_count
FROM people AS p
GROUP BY p.age;
