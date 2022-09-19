// Check for null or undefined given string
// run through the string and compare the character for repeated characters
// Nested for loop for checking characters
// Keep track of count of repeated characters. Set to 0 and check if greater than 1 for repeats
// Return a boolean based off count

function isIsogram(str){
  // Checking for undefined expression
  if(str === null || str === undefined)
    return false;
  
  // Lowercasing the string for capital checks
  str = str.toLowerCase();
  let count = 0;
  // Running through the string and check for repeated counts
  for(let char of str){
    for(let char2 of str){
      // Checking for repeated character
      if(char2 === char)
        count++;
    }
    // If there is a repeat character, if statement is true
    if(count > 1)
      return false;
    count = 0;
  }  
  return true;
}
