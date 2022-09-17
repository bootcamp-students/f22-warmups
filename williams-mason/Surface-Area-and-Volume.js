function getSize(width, height, depth) {
    let volume = ((width * height) * depth);
    
    let surfaceArea = (((width * height) + (width * depth) + (height * depth))*2);
    
    return [surfaceArea, volume];
      }
    /*
    volume = (width * height * depth);
    
    surfaceArea = 
    every side face area added together.
    there are only 3 faces I need to calculate, add those together, and multiply by 2
    width * height
    width * depth
    height * depth
    
    surfaceArea = (((width * height)(width*depth)(height * depth))*2);
    */