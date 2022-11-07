SELECT id, name FROM departments WHERE EXISTS 
(SELECT price from sales WHERE price > 98.00 AND sales.department_id = departments.id)
