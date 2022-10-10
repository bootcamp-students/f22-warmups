function order(words){
  
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
