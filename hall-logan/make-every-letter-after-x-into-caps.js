// convert string into an array
// get the index of the letter
// use a loop

var makeEveryLetterAfterXCaps = function (str, letter) {
// enter solution here
// console.log(str)
// console.log(letter)
let newStr = str
let newArray = newStr.split('')
  console.log(newArray)
  for(let i = 0; i < newArray.length; i++){
//     letter matches the letter of an item in the array
    if(newArray[i] === letter){
//    get the index of the item add 1 then uppercase the next letter
      console.log(i)
      let integer = i + 1
      if (newArray[integer] !== undefined){
        console.log(newArray[integer])
        let newLetter = newArray[integer].toUpperCase()
        newArray[integer] = newLetter
      }    
    }
  }
//   convert the array to a string
  
  return newArray.join('')
}

