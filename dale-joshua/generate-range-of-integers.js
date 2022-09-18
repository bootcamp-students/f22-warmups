function generateRange(min, max, step){
//create empty array
  let array = [];
  // loop through min number up to max, dividing into steps
  for(let i = min; i <= max; i += step){
  // pushing looped values to empty array
    array.push(i);
  }
  return array;
}
