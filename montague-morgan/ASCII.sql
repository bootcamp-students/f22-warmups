/*  SQL  */
-- look ascii code
SELECT 
 id,
 ascii(name) AS name,
 birthday,
 ascii(race) AS race
 FROM demographics
