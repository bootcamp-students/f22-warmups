function findShort(s){
  //given string
  //return length of shortest word
  //string !== ''

  // split string by 'space'
  s = s.split(' ');
  // set variable equal to index 0 length, this is the shortest intitial variable
  let short = s[0].length;
  //loop through new string array
  for (let i of s) {
  //loop output compare short variable length to length value of array index  
    if (i.length < short) {
  //if length of loop index is less than current shortest length then that becomes the shortest value     
      short = i.length;
    } 
  } return short;
}
