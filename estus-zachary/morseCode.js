// Split the code by spaces
// If at the beggining of the code will skip the spaces
// After values have been inserted will check to see if a space is followed by a character
// If the space is ahead of a character will add a space
// Otherwise push the code normally. 

decodeMorse = function(morseCode){
  let code = morseCode.trim().split(' ');
  let deCode = [];
  for(let i = 0; i < code.length; i++){
    if(code[i] != ''){
        deCode.push(MORSE_CODE[code[i]]);
      }
      if(code[i] === '' && code[i+1] != '' && code[i+1] != undefined){
        deCode.push(' ');
      }
    }
  return deCode.join('');
}
