/*
Add all nums before the first 0 in array
set new variable
loop through the length of the array
IF array[i] !== 0
add value of array[i] to new variable
else break
return var
*/

function houseNumbersSum(inputArray) {
    let sum = 0;
     for (let i = 0; i < inputArray.length; i++) {
       if (inputArray[i] !== 0) {
       sum += inputArray[i];
       } else if (inputArray[i] == 0) {
         break;
       }
     } return sum    
   }