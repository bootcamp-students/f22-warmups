SELECT id, name, split_part(characteristics, ',', 1) AS characteristic FROM monsters
ORDER BY Id
