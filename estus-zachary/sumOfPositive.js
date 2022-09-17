// Go through the array
// Check for positive value
// Add it to the sum
// Return sum
function positiveSum(arr) {
  let sum = 0;
  for(let i of arr){
    if(i > 0)
      sum += i;
  }
  return sum;
}
