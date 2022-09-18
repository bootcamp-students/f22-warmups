// Pseudocode 
// Assumption: None

// Surface area
//  START
//  CALCULATE: formula for area = ((depth * width) + (depth * height) + (height * width)) * 2
//  RETURN: area in an array
//  END

// Volume
//  START
//  CALCULATE: formula for volume = width * height * depth
//  RETURN: volume in an array
//  END


function getSize(width, height, depth) {
  let area =  ((depth * width) + (depth * height) + (height * width)) * 2;
  let volume = width * height * depth;
  
  return [area, volume];  
  
}

