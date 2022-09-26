// use the split function to return a substring array
// 
function findLongest(str) {
  
  var spl = str.split(" ");
  console.log(spl)
  var longest = 0 
  for (var i = 0; i < spl.length; i++) { //for loop that runs as long as i is greater than .length
    if (spl[i].length > longest) { // if spl with an index of [i]
      longest = spl[i].length
    }
    }
  console.log(longest)
    return longest
}
