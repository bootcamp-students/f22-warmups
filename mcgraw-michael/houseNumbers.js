function houseNumbersSum(inputArray) {
 let newArray = inputArray.splice(0,inputArray.indexOf(0))
  
 
const sumWithInitial = newArray.reduce(
  (previousValue, currentValue) =>
  previousValue + currentValue, 0
);

 return sumWithInitial;
  
}
