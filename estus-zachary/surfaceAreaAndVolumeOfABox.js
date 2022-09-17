// Box has 2 sides that share area
// Each side is 2 dimensions times each other
// Value[0] is the area
// Value[1] is the volume

function getSize(width, height, depth) {
  let value = [];
  value[0] = ((width * height) * 2) + ((width * depth) * 2) + ((height * depth) * 2);
  value[1] = width * height * depth;
  return value;
}
