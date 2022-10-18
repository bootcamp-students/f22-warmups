var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  let incomingString = "";
  if (iterable.isArray) {
    incomingString = iterable.join;
  } else {
    incomingString = iterable;
  }
  console.log("Incoming string is: ", incomingString);
  
  let returnString = "";
  
  for (let i=0; i<incomingString.length; i++) {
    let holdLetter = incomingString[i];
    console.log("Testing for: ", holdLetter);
    console.log("Next letter is: ", incomingString[i+1]);
    if (holdLetter !== incomingString[i+1]) {
      returnString = returnString + holdLetter
    }
  };
  console.log("returnString is: ", returnString);
  let returnArray = returnString.split('');
  console.log("returnArray is: ", returnArray);
  
  let returnNumberArray = [];
  
  returnArray.forEach((character) => {
    if (character == "0"
        ||
        character == "1"
        ||
        character == "2"
        ||
        character == "3"
        ||
        character == "4"
        ||
        character == "5"
        ||
        character == "6"
        ||
        character == "7"
        ||
        character == "8"
        ||
        character == "9"
        ) {
        let numberCharacter = parseInt(character);
        returnNumberArray.push(numberCharacter);
    }
  });
  console.log(returnNumberArray);
  
  if (returnNumberArray.length > 0) {
    return returnNumberArray;
  } else {
  return returnArray;
    };
}
