// Check the given string for vowels
// Each string will be missing on vowel only
// Make an array of vowels, run through the array checking if the string includes the vowel
// Includes returns true or false. !includes means if the string doesn't contain it.

function absentVowel(x){
  let vowel = ['a', 'e', 'i', 'o', 'u'];
  for(let i = 0; i < vowel.length; i++){
    if(!(x.includes(vowel[i]))){
      return i;
    }
  }
}
   // !(x.includes(vowel[i])) ? index = i : '';
  // let index = 0;
