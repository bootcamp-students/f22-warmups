// Pseudocode
// Assumptions: number a and b can be positive or negative, and equal

// START
// 
// RETURN Sum of a and b
// END



let min = Math.min(a,b); //returns the lower between both args and puts it into min variable
let max = Math.max(a,b); //returns the higher arg and stores it into max variable
let sum = 0


function getSum( a,b ) {
  if (min === max) {
    return min;
  } else {
    for ( i = min, i <= max, i++) {
      sum = i;
    }
  }
  return sum
}


