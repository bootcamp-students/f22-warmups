decodeMorse = function(morseCode){
  //console.log(MORSE_CODE)
  let messTrans = [];
  //convert code to array with split by space
  morseCode = morseCode.trim().split(' ');
  console.log(morseCode);
  //loop through the code array
  for (let i = 0; i < morseCode.length; i++) {
  // IF the index matches an entry from the morseCode table
  // THEN return the translation
    if(morseCode[i] != '') {
  // AND push the value to the new array    
    messTrans.push(MORSE_CODE[morseCode[i]]);
    }
 //IF the index includes a space in front of the word then push a space
    if(morseCode[i] === '' && morseCode[i+1] != '') {
      messTrans.push(' ');
    }
  }
  return messTrans.join('');
}
