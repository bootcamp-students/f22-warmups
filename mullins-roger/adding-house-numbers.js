function houseNumbersSum(inputArray) {
  //coding and coding..
  let index = 0;
  let x = inputArray[index];
  let sum = 0;
  
  console.log("Incoming array: ", inputArray);
  
  while (x != 0) {
    console.log("Element number ", index, ": ", inputArray[index]);
    sum = sum + inputArray[index];
    index++;
    x = inputArray[index];
  }
  return sum;
}
