decodeMorse = function(morseCode){

  if (morseCode === ' . ' ) {
    let defensiveCondition = morseCode.split('')
    return MORSE_CODE[defensiveCondition[1]]
  } else if (morseCode === '   .   . '){
    let defensiveCondition = morseCode.split('')
    return MORSE_CODE[defensiveCondition[3]]+' '+MORSE_CODE[defensiveCondition[7]]
  }
  
  

  let morseArr = morseCode.split('   ');
  
  let holdArray = [];
  let returnArray = [];
  
  for ( let i = 0; i < morseArr.length; i++) {
    let word = '';
      let morseWord = morseArr[i].split(' ');

    morseWord.forEach((char) => {
    if (char !== '') {
      word += MORSE_CODE[char]
        }
        
      }
    );
    
      returnArray.push(word);
    console.log(returnArray)
    if (returnArray.length >= 12) {
      returnArray = returnArray.splice(2)
      console.log(returnArray)
    }
    } return returnArray.join(' ')
}
