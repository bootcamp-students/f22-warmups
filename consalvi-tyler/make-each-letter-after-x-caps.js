/*
create a new string
create new array by splitting string into letters
loop through the array
if letters[i] == letter
capitalize
if not undefined 
capitalize
return joined letters array
*/

var makeEveryLetterAfterXCaps = function (str, letter) {
    let newStr = str
    let letters = newStr.split('')
      for(let i = 0; i < letters.length; i++){
        if(letters[i] === letter){
          let capitalize = i + 1
          if (letters[capitalize] !== undefined){
            let newLetter = letters[capitalize].toUpperCase()
            letters[capitalize] = newLetter
          }    
        }
      } return letters.join('')
}