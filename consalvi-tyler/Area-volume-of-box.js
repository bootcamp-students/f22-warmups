
/*
getsize(width, height, depth)

volume = ((width * height) * depth)

surfaceArea = (((width * depth) + (height * depth) + (height * width)) * 2);

return [surfaceArea, volume]
*/

function getSize(width, height, depth) {
    let volume = ((width * height) * depth);
    
    let surfaceArea = (((width * depth) + (height * depth) + (height * width)) * 2);

    return [surfaceArea, volume];      
}
