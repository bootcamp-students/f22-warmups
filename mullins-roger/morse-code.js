decodeMorse = function(morseCode){
  //your code here
  console.log(morseCode);
  let decodeString = morseCode.split(" ");
  console.log(decodeString);
  let returnString = "";
  for (let i=0; i<=decodeString.length; i++) {
    if (MORSE_CODE[decodeString[i]] != undefined) {
      console.log(MORSE_CODE[decodeString[i]]);
      returnString = returnString + (MORSE_CODE[decodeString[i]]);
    } else {
      returnString = returnString + " ";
    };
  };
  console.log(returnString);
  returnString = returnString.replace(/\s+/g, ' ').trim();
  console.log(returnString);
  return returnString;
}
