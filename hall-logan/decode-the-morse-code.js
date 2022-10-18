// split the string at the space
// 


decodeMorse = function(morseCode){
  morseCode = morseCode.trim()
  let ans = new Array
  let MC = morseCode.split(' ')
  console.log(MC)
  for(let i = 0; i < MC.length; i++){
    if(!MC[i]){
      ans.push(' ')
      i++
    } else {
      ans.push(MORSE_CODE[MC[i]])
    }
  } return ans.join('')
}
