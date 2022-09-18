// Pseudocode
// Assumptions: number a and b can be positive or negative, and equal

// START
// DETERMINE: min and max of integers
// CALCULATE: for loop to get integers
// RETURN: sum of a and b
// END


function getSum( a,b ) {
  let min = Math.min(a,b); 
  let max = Math.max(a,b); 
  let sum = 0;
    
  if (min === max) {
    return min;
  } else {
      for (let i = min; i <= max; i++) {
        sum += i;
    }
  }
  return sum;
}

