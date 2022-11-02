-- Your Code Here
-- list names, authors and number of copies, limit 5

SELECT name, author, copies_sold FROM books 
Order By copies_sold desc
Limit 5
