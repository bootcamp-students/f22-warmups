// given a string with each word containing a single number(1-9)
// the number corresponds to the position the word should be in the result
// if the input string is empty, return an empty string


function order(words){

  if (words) {
    let finalArr = []
    words.split(' ')
   .forEach(word => {
      let index = Number(word.match(/\d+/g));
      finalArr[index - 1] = word
    })
    return finalArr.join(' ')
  }
  return words;
} 
