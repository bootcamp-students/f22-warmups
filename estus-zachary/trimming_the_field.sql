SELECT id, name, SPLIT_PART(characteristics, ',', 1) as characteristic from monsters ORDER by ID
