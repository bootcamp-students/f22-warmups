// Find the sum of each individual array
// Add the two sums together

function arrayPlusArray(arr1, arr2) {
  let sum = 0;
  for(let i of arr1){
    sum += i;
  }
  for(let i of arr2){
    sum += i;
  }
  return sum; 
}
