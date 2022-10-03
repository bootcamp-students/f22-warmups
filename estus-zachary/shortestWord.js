// Given only strings find the shortest word. String is seperated by spaces
// Split the array by spaces to just get the words
// Step through the array and get the shortest word

function findShort(s){
  s = s.split(' ');
  let short = s[0].length;
  for(let str of s){
    if(str.length < short){
      short = str.length;
    }  // End of If
  }  // End of For str
  return short;
}

// Take the mininum value of the array after you split it, and then convert the string arrays to the length of the letters
function findShortest(str){
  return Math.min.apply(null, str.split(' ').map( str => str.length));
}
