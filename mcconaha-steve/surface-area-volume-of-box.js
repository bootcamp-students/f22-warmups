/*Objective Write a function that returns the total surface area and volume of a box as an array: [area, volume]*/

function getSize(width, height, depth) {
 //Surface Area = 2*(length x width + length x height + width x height)
    const surfaceArea = (depth * width + depth * height + width * height)*2;
//Volume = length x width x height
    const volume = (width * height * depth)
//Need to return the result
    return [surfaceArea, volume];
};
