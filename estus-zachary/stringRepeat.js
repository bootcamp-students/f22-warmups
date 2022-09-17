// Create an empty string
// Add to the empty string given string n number of times
// For loop to loop the correct n times
// Catanate the string onto the new string

function repeatStr (n, s) {
  let newStr = '';
  for(let i = 0; i < n; i++){
    newStr += s;
  }
  return newStr;
}
