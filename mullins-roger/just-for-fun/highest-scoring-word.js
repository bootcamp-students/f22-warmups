function high(x){
  let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let xArray = x.split(" ");
  let testWord = "";
  let highWord = "";
  let letterScore = 0;
  let wordScore = 0;
  let highWordScore = 0;
  
  function calculateWordScore (wordIn) {
  let thisWordScore = 0;
    for (let j=0; j<wordIn.length; j++) {
      letterScore = (alphabet.findIndex((letter) => letter === wordIn[j])+1);
      thisWordScore = thisWordScore + letterScore;
    }
    return thisWordScore;
  }
  
  for (let i=0; i<xArray.length; i++) {
    testWord = xArray[i];

    wordScore = calculateWordScore(testWord);
    if (wordScore > highWordScore) {
      highWordScore = wordScore;
      highWord = testWord;
    }
  }
  
  return highWord;
}
