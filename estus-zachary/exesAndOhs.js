// Checking if same number of X's and O's
// Get a count of each x and o
// Step the string character by character
// Compare check for capitals
// Increase count of x and o respectively
// Compare count and return value based off that.

function XO(str) {
  let x = 0;
  let o = 0;
  for(let char in str){
    if(str[char] === 'o' || str[char] === 'O'){
      o++;
    }
    if(str[char] === 'x' || str[char] === 'X'){
      x++;
    }
  }
  if(x === o) {
    return true;
    }
  else { 
    return false;
    }
}
