// Create a new string
// Create an index that is the length of the string minus one (undefined purposes)
// While the index of the old string is less than 0, add the character at index to the new string
// Decrease the index by one 
function solution(str){
  let newStr = '';
  let index = str.length - 1;
  while (index >= 0){
    newStr += str[index];
    index--;
    }
  return newStr;
}
