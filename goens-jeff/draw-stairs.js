// Pseudocode

// CREATE variables
// CREATE loop that cycles through (n) times and increments
// CREATE if conditional to remove the next row addition


function drawStairs(n) {
  let steps = "I";
  let space = " ";
  let emptyString = ""
  
 for (let i = 1; i <= n; i++) {
   
   emptyString += space.repeat(i-1) + steps
   if (i != n) {
     emptyString += "\n"
   }
  
 }
  return (emptyString);
}
