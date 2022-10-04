/*
split into an array
test for min and max
return min and max
*/

function highAndLow(numbers){
    return `${Math.max(...(numbers.split(' ')))} ${Math.min(...(numbers.split(' ')))}`;
  }