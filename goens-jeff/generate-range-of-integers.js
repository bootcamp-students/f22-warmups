// Pseudocode
// Assumptions: None

// START
// DETERMINE: new array to hold return value
// CALCULATE: for loop while min value is less than max
// PUSH: push values into new array
// RETURN: new array
// END



function generateRange(min, max, step) {
  let newArray = [];
  for (let i = min; i <= max; i += step) {
    newArray.push(i); 
    }
  
    return newArray;
  }
  
  
