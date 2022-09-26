// Need curly brackets to define the function parameters, repeated multiple times
function findLongest(str) {
  
  var spl = str.split(" ");
  var longest = 0
  
  // Missing second "+" in the last for argument. i needs to be < spl.length to stop the for loop at the end of the array created by split()
  for (var i = 0; i < spl.length; i++) {
    // Need [] in "spl(i).length" instead of ()
    if (spl[i].length > longest) {
      longest = spl[i].length
    }
    }
    return longest
}
