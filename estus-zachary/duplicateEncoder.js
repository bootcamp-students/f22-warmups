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
