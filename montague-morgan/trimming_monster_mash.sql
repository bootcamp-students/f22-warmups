/*  SQL  */
-- Monsters should have only 1 characteristic
-- select id name and one characteristic

SELECT id, name, split_part(characteristics, ',',1) AS characteristic
FROM monsters
ORDER BY id



-- UPDATE Monsters
-- SET characteristics = LEFT(characteristics, CHARINDEX(',', characteristics) - 1)
-- WHERE CHARINDEX(',', characteristics) > 0
