// Convert the given string into an array
// run through the number of letters using the words.length
// Check if that word contains the numbers increasing
// Push that into a new array

function order(words){
  if(words === ''){
    return words;
  }
 let str = words.split(' ');
  let newArr = [];
  for(let i = 1; i <= str.length; i++){
    for(let letter of str){
      if(letter.includes(i)){
        newArr.push(letter);
      }
    }
  }
  return newArr.join(' ');
}
