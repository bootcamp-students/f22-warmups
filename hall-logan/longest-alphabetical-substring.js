
// initialize variables for
//   empty string to push result
//    length of the substring
//    start of the substing
//  previous letter for comparison
// 
// loop through the string
//   IF iterator is equal to the length of the string OR current value of index of iterator > previous
//    IF length of substring < iterator - start
//  start equals iterator

//  prev equals string with an iterator

// return longestSub

function longest(s) {
  // Good luck :)
  var longestSub = "",
      length = 0,
      start = 0,
      prev = s[0];
  for (var i = 1; i <= s.length; ++i) {
    if(i == s.length || s[i] < prev) {
      if(length < i-start) {
        longestSub = s.substring(start, i);
        length = i-start;
      }
      start = i;
    }
    prev = s[i];
  };
  return longestSub;
}
  

