SELECT * FROM departments
WHERE EXISTS (SELECT id, price FROM sales WHERE departments.id = sales.department_id AND sales.price > 98)
