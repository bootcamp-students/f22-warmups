// Go through the string and check for vowel
// if vowel don't add it to the new string
// return string

function disemvowel(str) {
  let newStr = '';
  for(let char of str){
    if(char != 'a' && char != 'A' && char != 'E' && char != 'e' && char != 'o' && char != 'O' && char != 'i' && char != 'I' && char != 'U' && char != 'u')
      newStr += char;
  }
  return newStr;
}
