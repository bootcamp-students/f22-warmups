//INPUT width, height, depth
//LET volume = width * height * depth
//LET area = 2 * (width * height + width * depth + height * depth)
//RETURN new array including both area and volume


getSize = (width, height, depth) => [2 * (width * height + width * depth + height * depth), width * height * depth];

