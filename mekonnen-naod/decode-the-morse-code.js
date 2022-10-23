decodeMorse = function(morseCode){
  morseCode = morseCode.trim();
  let newData = morseCode.split('   ');
  let result = [];
  
  for (let i = 0; i < newData.length; i++) {
    let temp = newData[i].split(' ');
    for (let j = 0; j < temp.length; j++) {
      if (MORSE_CODE[temp[j]]) {
        result.push(MORSE_CODE[temp[j]]);
      }
    }
    
    if (i !== newData.length - 1) {
    result.push(' ');
    }
  }
  return result.join('');
}
