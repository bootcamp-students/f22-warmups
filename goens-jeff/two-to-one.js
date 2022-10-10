
function longest(s1, s2) {

  let comparisonString = "abcdefghijklmnopqrstuvwxyz";
  let newString = "";
  
  for (let i = 0; i < 26; i++) {
    if(s1.includes(comparisonString[i]) || (s2.includes(comparisonString[i]))) {
      newString = newString + comparisonString[i];
        
    }
  }
      return newString;
 }
