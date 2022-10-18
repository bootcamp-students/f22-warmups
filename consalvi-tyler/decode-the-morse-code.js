/*
trim string
split string at space
set new array for letters
loop through string
if ' ' push space i++
else push letter to array
return array joined
*/

decodeMorse = function(morseCode){
  
  morseCode = morseCode.trim()
  let MC = morseCode.split(' ')
  let ans = new Array
  
  for (let i = 0; i < MC.length; i++) {
    if (!MC[i]) {
      ans.push(' ')
      i++
    } else {
      ans.push(MORSE_CODE[MC[i]])
    }
  } 
    return ans.join('')
}
