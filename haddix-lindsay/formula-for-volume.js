function getSize(width, height, depth){
  
    /* Find area with formula */
      let volume = width * height * depth;
      
    /* Find volume with formula */
      let area = 2 * (width * height + height * depth + depth * width);
      
    /* Return as an array */
      return [area, volume];
      }