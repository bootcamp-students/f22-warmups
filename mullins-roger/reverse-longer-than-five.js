// Split incoming string into an array
// Test each array element for length >5
//   Flip it if true
//   Write it to a new array
// Write original word to array if false

function spinWords(string){
  //TODO Have fun :)
  
  let testArray = string.split(" ");
  let returnString = "";
  let returnArray = [];
  console.log("String in: ", string);
  console.log("Array version: ", testArray);
  
  testArray.forEach((word) => {
    console.log(word);
    if (word.length >= 5) {
      console.log("Word is longer than 5.");
      let wordToFlip = word.split("");
      let flippedWord = "";
      for (i = (word.length-1); i >=0; i--) {
        flippedWord = flippedWord + wordToFlip[i];
      }
      console.log("Word to flip was: ", wordToFlip);
      console.log("Flipped word is:", flippedWord);
      //returnString = returnString + flippedWord;
      returnArray.push(flippedWord);
    } else {
      //returnString = returnString + word;
      returnArray.push(word);
    }
  })
  console.log("returnArray is: ", returnArray);
  console.log("Final returnString is: ", returnString);
  returnString = returnArray.join(" ");
  return returnString;
}
