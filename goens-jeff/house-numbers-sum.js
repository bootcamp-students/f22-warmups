function houseNumbersSum(inputArray) {
  //coding and coding..
   let houseZero = 0;

  for (let i = 0; inputArray[i] != 0; houseZero += inputArray[i++]);

  return houseZero;
}
