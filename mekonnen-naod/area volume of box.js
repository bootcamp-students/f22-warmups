// GET length
// GET width
// GET height

// FUNCTION:Calculate Area
// FUNCTION:Calculate Volume

// RETURN [Area, Volume]

function getSize(width, height, depth){

Area = 2*((depth*width) + (depth*height) + (width*height));

Volume = depth * width * height;
          
return [Area, Volume];

}
