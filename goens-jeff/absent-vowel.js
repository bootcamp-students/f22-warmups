// Pseudocode

// STORE the vowels in a variable
// LOOP through the values
// FIND the index of the vowels and substract 1 this will find the zero indexed number
// RETURN number



function absentVowel(x){
  let vowels = "aeiou";
  
  for (let i in vowels) {
    if (x.indexOf(vowels[i]) == -1) {
      return Number(i);
    }
  }
}  
  
