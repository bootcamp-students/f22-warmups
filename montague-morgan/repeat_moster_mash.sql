/*  SQL  */
-- given monster
-- return name and characteristics
-- name should be repeated 3 times
-- characteristics should be reversed
SELECT
CONCAT(name,
        name,
        name) AS name,
        reverse(characteristics) AS characteristics
FROM Monsters
