// split string into new array of the words
// use sort method to sort by length of words
// will return the first index of the array, 
// which will be the length of the shortest word of s
function findShort(s){
  let newWord = s.split(' ');
  newWord.sort((a,b) => a.length - b.length);
  return newWord[0].length;
}
