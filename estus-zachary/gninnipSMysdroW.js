// Split the string using ' '
// If the word is longer than 4 letters reverse the words. 
// Reverse the word using another for loop backwards
// then set the index of the String to newWord

function spinWords(string){
  string = string.split(' ');
  let index = 0;
  for(let word of string){
    if(word.length > 4){
      word = word.split('').reverse().join('');
      string[index] = word;
    }
    index++;
  }
  return string.join(' ');
}
