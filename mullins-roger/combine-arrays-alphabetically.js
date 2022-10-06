function longest(s1, s2) {
  // your code
  let comparison = "abcdefghijklmnopqrstuvwxyz";
  let newString = "";
  
  console.log("String 1: ", s1);
  console.log("String 2: ", s2);

  for (let i=0; i<=25; i++) {
    console.log("Testing for: ", comparison[i]);
    if (s1.includes(comparison[i]) || (s2.includes(comparison[i]))) {
        newString = newString + comparison[i];
        }
  };
  
  console.log(newString);
  return newString;
  
}
