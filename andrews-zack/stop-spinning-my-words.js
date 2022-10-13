// split the string so each word is an index in an array
// loop through the array with a conditional to check if the length of the word is at least 5 letters
// push all words into an array no matter what
// push that word into an empty array, split it by letter, reverse it, join it, and push it back into the array that all words go into
// join it to make it a string

function spinWords(string){
  let words = string.split(' ');
  let arr = [];
  let keith = '';
  let newArr = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      arr.push(words[i]);
      keith = arr.join('');
      arr = keith.split('')
      arr.reverse();
      keith = arr.join('');
      newArr.push(keith)
      arr = [];
    } else {
      
    newArr.push(words[i])
    console.log(keith);
    }
  }
  keith = newArr.join(' ')
  return keith;
}
