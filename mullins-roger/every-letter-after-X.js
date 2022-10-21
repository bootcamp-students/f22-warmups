// Step through the incoming string one letter at a time
// IF the current character is = lower or upper case letter
// string[i+1] equals = X

var makeEveryLetterAfterXCaps = function (str, letter) {
// enter solution here

  console.log("String coming in: ", str);
  console.log("Searching for: ", letter);
    
let workingArray = str.split('')

  console.log("workingArray: ", workingArray);

  for (let i=0; i<workingArray.length; i++) {
    if (workingArray[i - 1] === letter) {
      workingArray[i] = workingArray[i].toUpperCase();
      console.log("Converted!");
      };
  } 
    return workingArray.join('')
  }
  
