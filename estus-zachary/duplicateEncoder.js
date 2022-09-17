// // Create an empty string to return
// set count to -1 to avoid off by one errors
// Count to -1 allows comparision to itself, and gives correct value for similiar characters
// Make the string lower case to avoid issues with that
// Step throug the array and compare the value
// Depending on the count Add ( or ) to the encoded string

function duplicateEncode(word){
    let newStr = '';
    let count = -1;
    word = word.toLowerCase();
    for(let char of word){
      for(let char2 of word){
        if(char === char2){
          count++;
        }
      }
      if(count === 0){
        newStr += '(';
      } else 
        newStr += ')';
     count = -1; 
    }
  return newStr;
}
