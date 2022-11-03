SELECT *
FROM departments
WHERE EXISTS (SELECT id FROM sales WHERE departments.id = sales.department_id AND price >= 98.00);
