/*
formula for finding area of box set to var
formula for volume of box set to var
return array with area and volume
*/
function getSize(width, height, depth) {

    const area = 2 * (width * height + depth * height + depth * width);
  
    const volume = width * height * depth;
  
  return [area, volume]
  }