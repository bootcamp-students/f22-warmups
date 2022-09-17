function createPhoneNumber(numbers){
  let phoneStr = '(';
  let char =0; 
  for(let index of numbers){
    phoneStr += index;
    char++;
    if(char === 3)
      phoneStr += ") ";
    if(char === 6)
      phoneStr += '-'
  }
  return phoneStr;
}
