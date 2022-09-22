// Given number n, return n number of "I"s spaced out on subsequent lines.
// First line has no padding to the left, and \n after
// Lines 2 through (n-1) need padding before and and \n after
// Line n needs padding before and nothing after

function drawStairs(n) {
  let newString = "";
  for (let i = 0; i < n; i++) {
    newString += "I";
      if(i !== (n-1)) {
        newString += "\n ";
        for (let z = 0; z < i; z++) {
          newString += " ";
        }
      }
    
      } return newString;
}
