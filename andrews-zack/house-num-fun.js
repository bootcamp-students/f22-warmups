// We can find the index of 0 and slice/splice anything after that away
// Sum the indexes of the array after that using hand-waving reduce method

function houseNumbersSum(testArr) {
  let initVal = 0;
  let newArr = testArr.slice(0,(testArr.indexOf(0)));
  return newArr.reduce((prevVal, currVal) => prevVal + currVal, initVal);
}
