// Create an empty binary string
// step through the string character by character
// Convert the character to a number and compare it to 5
// This determines if the next value in the binary string should be a 1 or 0
// return the string 

function fakeBin(x){
  let str = '';
  for(let char of x){
    if(Number(char) >= 5){
      str = str + '1';
    } else {
      str = str + '0';
    }
  }
  return str;
}
