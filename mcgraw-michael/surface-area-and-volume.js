// Write a function that returns the total SURFACE area and VOLUME of a box.
//
// Surface area is the sum of all sides  = (WIDTH*HEIGHT)2 + (WIDTH*DEPTH)2 + (WIDTH*DEPTH)2 = WH2 + WD2 + HD2
//
// Volume is the total space taken up by box = depth * width * height = D*W*H
//
function getSize(width, height, depth) {
    
    let area = ((width * height ) * 2) + ((width * depth) * 2) + ((height * depth) * 2);
    let volume = (depth * width * height);

    let size = [area, volume];

return size;
}