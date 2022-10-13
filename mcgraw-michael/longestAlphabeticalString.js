function longest(str) {
  
//   set two vars to be used later as empty strings
  let longestSub = '';
  let lastSub = '';
  
//   loop through the index of the string
  for ( i = 0; i < str.length; i++) {
//     assign a var(char) for the current index
    let char = str.charAt(i);
//     check if char is >= (alphabetically) the last letter of lastSub
    if (char >= lastSub.slice(-1)) {
//       concat char onto last sub if true
      lastSub += char;
//       check if lastSub is longer than current longestSub
      if (lastSub.length > longestSub.length) {
//         if true set longestSub equal to lastSub
        longestSub = lastSub;
      }
    } else {
//       this will let the function move on to the next letter to continue checking strings
      lastSub = char;
    }
  } return longestSub;
}
