// Split the string based on whether or not it includes - _
// Run through the string skipping the first letter
// Split the the word up and toUpperCase the first letter

function toCamelCase(str){
  str = str.includes('-') ? str.split('-') : str.split('_');
  let word = [];
  let newStr = [];
  newStr.push(str[0]);
  for(let i = 1; i < str.length; i++){
    word = str[i].split('');
    word[0] = word[0].toUpperCase();
    word = word.join('')
    newStr.push(word);    
  }
  return newStr.join('');
}
