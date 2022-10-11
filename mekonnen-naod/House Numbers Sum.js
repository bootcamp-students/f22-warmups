// adding the numbers in an unordered array, then add only the numbers after 0
// given a sequence of houses, determine the sum that the boy will get
// it's guaranteed that there will be at least one house with number 0
// set a new variable(sum) to 0;
// use a for loop, and operator
// iterate through the array and for every value that's not 0, return the sum

function houseNumbersSum(inputArray) {
  var sum = 0
    for(var i=0;i<inputArray.length && inputArray[i]!== 0;i++){
    sum+=inputArray[i]
  }
  return sum
}
