area and volume of a box
define area and volume
a box is a a container with parallel rectangular or square sides
area of a box is 2dw+2dh+2hw, due to there being two parallel sides
volume is width * height * depth
first create a function for get size
function getSize(width, height, depth)
set up the two variables area and volume
const area = 1
const volume = 1
then apply the math fomrulas written above
 area = (2*depth*width)+(2*depth*height)+(2*width*height)
 volume = width*height*depth

function getSize (width, height, depth) {
    let area = 0
    let volume = 0

    area = ((2*depth*width)+(2*depth*height)+(2*width*height))
    volume = width*height*depth

    return [ area, volume]
}
