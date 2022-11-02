SELECT 
  id, 
  name,
  TRIM(',' FROM SPLIT_PART(characteristics, ' ', 1)) AS characteristic
FROM monsters
ORDER BY id;
