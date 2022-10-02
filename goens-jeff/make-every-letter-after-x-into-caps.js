// pseudocode

// declare new variable and split to a new array
// loop thru new array based on length
// check to see if new array is equal to letter and add +1 to capture next letter in string
// change newArray + 1 to uppercase



var makeEveryLetterAfterXCaps = function (str, letter) {
 let newArray = str.split("");
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] === letter && newArray[i + 1]) {
      newArray[i + 1] = newArray[i + 1].toUpperCase()
    }
  }

return newArray.join("")

}
