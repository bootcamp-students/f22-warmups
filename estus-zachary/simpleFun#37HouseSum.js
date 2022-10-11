// Loop through the given inputArray
// If the number is 0 return the sum at that given point
// Add the index value to the sum

function houseNumbersSum(inputArray) {
  let sum = 0;
  for(let num of inputArray){
    if(num === 0){
      return sum;
    }
    sum = sum + num;
  }
  return sum;
}
