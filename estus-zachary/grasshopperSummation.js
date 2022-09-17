// Start at 1 and while start is less than num go, add one to start
// While stepping start up add it the sum
// return the sum
var summation = function (num) {
  let start = 1;
  let sum = 0;
  while(start <= num){
    sum += start;
    start++;
  }
  return sum;
}
