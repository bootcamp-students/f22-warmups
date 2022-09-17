// Catanate the numbers to a string.
// Count helps me keep track and add the format for numbers in the right place

function createPhoneNumber(numbers){
  let phoneStr = '(';
  let char =0; 
  for(let index of numbers){
    phoneStr += index;
    char++;
    if(char === 3)
      phoneStr += ") ";
    if(char === 6)
      phoneStr += '-'
  }
  return phoneStr;
}
