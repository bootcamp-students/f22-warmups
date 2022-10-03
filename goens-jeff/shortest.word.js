// pseudocode

// split string into an array
// split with empty string value return each word as it's own array
// sort new array and compare string length
// return shortest string by index value [0]



function findShort(s){
  const shortWord = s.split(' ');
  console.log(shortWord);
  shortWord.sort((a,b) => a.length - b.length);
  return shortWord[0].length;
}
