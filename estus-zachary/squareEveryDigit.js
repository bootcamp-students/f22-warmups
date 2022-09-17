// Convert the number to string to avoid dealing with digits
// Add an empty string
// Step through each 'character' of the string
// Convert the character back to a number and square
// Convert the string to a number and return

function squareDigits(num){
  let str = num.toString();
  let newNum = '';
  for(let i of str){
    newNum += Number(i) * Number(i);
  }
  
  return Number(newNum);
}
