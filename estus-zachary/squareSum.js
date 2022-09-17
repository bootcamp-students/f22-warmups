// Step through the array of numbers
// square each number and add it to the sum
// return sum

function squareSum(numbers){
  let sum = 0;
  for(let i of numbers){
    sum += i*i;
  }
  return sum;
}
