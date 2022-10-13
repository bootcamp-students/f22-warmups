// I cheated

// Given a string, 

function longest(s) {
  // Generating helpful variables
  let longestSub = "",
      length = 0,  // Length of the substring
      start = 0,  // Start of the substring
      prev = s[0];  // The letter before the index
  // Loop through the array
  for (var i = 1; i <= s.length; i++) {
    // If i is the length or if alphabetical order
    if(i === s.length || s[i] < prev) {
      // if the length of the substring is less than the index - start
      if(length < i - start) {
        // Makes the longest substring available
        longestSub = s.substring(start, i);
        length = i - start;
      }  // End of If length
      // Sets the start to i
      start = i;
    } // End of first IF
    // Sets prev to the previous value of the index
    prev = s[i];
  };  // End of for loop
  return longestSub;
}
