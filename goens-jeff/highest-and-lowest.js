// pseudocode

// split array to remove space
// declare new variable to apply split method 
// declare two new variables for highNumber and lowNumber
// use for-if statement to see if item(number) of new array is higher or lower
// concatenate the high and low number with a space




function highAndLow(numbers){
  const newArray = numbers.split(' ');
  let highNumber = newArray[0];
  let lowNumber = newArray[0];
  
  for (let item of newArray) {
    if(Number(item) > highNumber) {
      highNumber = item;
     }
    
    if(Number(item) < lowNumber) {
      lowNumber = item;
     }
    
    }
    return highNumber + ' ' + lowNumber;
  }
  
  
  
