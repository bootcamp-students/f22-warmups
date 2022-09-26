// Fix the bugs until the code runs
// Then fix the logic errors

function findLongest(str) {
  // Create an array that is the string seperated by spaces
  var spl = str.split(" ");
  var longest = 0
  // Run through the length of the string checking for longest word 
  for (var i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
      longest = spl[i].length
    }
  }
    return longest
}
