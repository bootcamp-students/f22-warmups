//return length of shortest word.

//split words into an array.
// create a lengths array to store all lengths
// get the smallest from the list
// return lngth of shortest word.

function findShort(s){
  
  let words = s.split(' ')
  let lengths=[];
    words.forEach((word)=>{
      lengths.push(word.length);
    })
  return Math.min(...lengths)
}
