function houseNumbersSum(inputArray) {
  //return the sum of all numbers in an array until 0 is met
  //create variable for sum
  //loop through array
  //while index[i] !=== 0
  //return sum of index
  let sum = (0);
  for (let num of inputArray) {
    if (num !== 0) {
      sum += num;
    } else {
      return sum;
    }
  }
}
