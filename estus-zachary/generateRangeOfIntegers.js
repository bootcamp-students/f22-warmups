// Create an array
// While the min is less than the max add it to the array
// Increase the min by the step
//
function generateRange(min, max, step){
  let range = [];
  let index = 0;
  while(min <= max){
    range[index] = min;
    index++;
    min += step;
  }
  return range;
}
