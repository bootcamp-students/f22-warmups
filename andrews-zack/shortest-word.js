// Separate the string into an array with each index as a word, separated by a space.
// For loop going through each index and store the length in a variable.
// If the length is shorter than the stored variable, we store that value in the variable.

function findShort(s){
  let words = s.split(' ');
  let lengths = [];
  words.forEach((word)=>{
    lengths.push(word.length);
  })
 return Math.min(...lengths)
}
