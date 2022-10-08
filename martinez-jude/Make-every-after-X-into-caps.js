var makeEveryLetterAfterXCaps = function (str, letter) {
let newString = ''
for(let i = 0; i < str.length; i++){
  if(str[i] == letter && i != (str.length -1)){
    newString = newString + str[i]
    i++
    newString = newString + str[i].toUpperCase()
  } else{
    newString = newString + str[i]
  }
}
return newString

}
// Not successful
//START 
//FUNC capLetter INPUT 2 Params (str, letter)
// SET newString = ''
// FOR condition (SET i = 0; i < length of string int; i = i + 1 every loop)
// IF str[i] is equal to letter AND i is NOT equal to (length of str - 1)
// newString = newString + str[i]
// i = i + 1
// newString = newString + str[i].(HandWave method string to uppercase)
// ELSE
// newString = newString + str[i]
// END IF
// END FOR
//RETURN newString
// END FUNC
