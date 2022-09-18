/*
if two numbers are equal return a or b
arrange variables to set a max and min of parameters
find difference between max and min
use sum of integers formula to return the sum */

function getSum(a,b) {
    if (a === b){
    return a;
  }
  let min = Math.min(a,b),
   max = Math.max(a,b);
    return (max - min + 1) * (max + min) / 2
    }
    