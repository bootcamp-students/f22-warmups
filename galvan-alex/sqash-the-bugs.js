//use the split method 
// Output should be the length of the longest word, as a number




function findLongest(str) {
  
  var spl = str.split(" "); //returns an array of words deliminated by comma at space.

  var longest = 0 //
  
  for (var i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
      longest = spl[i].length
    };
  };
    return longest
};
