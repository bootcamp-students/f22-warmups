// split string into an array
// loop through the array
// if word length >= 5
// reverse the string
// splice the the string back into the array
// join the array

function spinWords(string){
  //TODO Have fun :)
  string = string.split(' ')
  for (let i = 0; i < string.length; i++){
    if (string[i].length >= 5){
      let word = (string[i].split('').reverse())
      word = word.join('')
      string.splice(i, 1, word)
    }
  } return string.join(' ')
}
