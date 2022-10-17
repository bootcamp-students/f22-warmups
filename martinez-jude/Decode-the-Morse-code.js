decodeMorse = function(morseCode){
  let newString = '';
  let newArr = [];
  let trimmed = morseCode.trim();
  const arr = trimmed.split('   ');

  for (let i = 0; i < arr.length; i++){
    let letter = arr[i].split(' ');
    
    
    for (let i = 0; i < letter.length; i++){
      if (letter[i] == ''){ 
      } else {
    let translated = MORSE_CODE[letter[i]];
      newString = newString + translated;}
    }
    
    
      newArr.push(newString);
      newString = '';
  }

  newArr = newArr.join(' ');
  return newArr;
}
