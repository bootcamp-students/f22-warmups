// find index of 0
// loop through array till 0
// push every number until index to empty array
// reduce a,b a + b
//return sum
function houseNumbersSum(inputArray) {
  let arr = [];
  let index = inputArray.indexOf(0);
//   console.log(index)
  for (let i = 0; i < index; i++) {
    arr.push(inputArray[i])
  }
  const sum = arr.reduce((a,b) => a + b, 0)
  return sum;
}
