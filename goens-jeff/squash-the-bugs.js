// Pseudocode

// functions begin and end with curly braces

function findLongest(str) {
  
  let spl = str.split(" ");
  let longest = 0
  
  // for loop should continue to check for items that are less than length
  
  for (let i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
      longest = spl[i].length;
    }
    }
    return longest
}
