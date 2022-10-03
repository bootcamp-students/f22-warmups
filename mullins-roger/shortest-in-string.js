function findShort(s) {
  let words = s.split(" ");
  console.log(words);
  let shortestWord = words[0];
  for (let word of words) {
    console.log("Word is ", word);
    console.log("shortestWord is ", shortestWord);
    if(word.length<=shortestWord.length) {
      console.log(word, " is shorter than ", shortestWord);
      shortestWord=word;
      console.log(shortestWord);
    };
  }
  return shortestWord.length;
}
