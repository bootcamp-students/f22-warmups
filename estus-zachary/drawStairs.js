// Add n * I to a string
// Add a new line to the string if it isn't the last line
// Add the correct number of spaces
// Corect number of extra spaces is equal to the line that its on, start at line 0

function drawStairs(n) {
  let newStr = '';
  for(let i = 0; i < n; i++){
    newStr += 'I';
    // If the it is not the last line
    if(i !== (n-1)){
      newStr += '\n ';
      // On line 0 we need no extra spaces, on line 1, one extra space
      for(let z = 0; z < i; z++){
       newStr += ' ';
      }
    }
    
  }
  return newStr;
}

// Repeat function adds i number of spaces
// Start for loop will start on the second line.

function drawStairs(n) {
  let newStr = 'I';
  for(let i = 1; i < n; i++){
    newStr += '\n' + (' ').repeat(i) + 'I';
  }
  return newStr;
}
