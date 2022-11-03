-- Create your SELECT statement here
SELECT 
  id,
  name
FROM departments
WHERE EXISTS (SELECT name FROM sales WHERE sales.department_id = departments.id and sales.price > 98)
