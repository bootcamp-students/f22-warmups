// Step through the array and check it for the given letter
// If it is given letter, toUpperCase the next index and replace it 
// If the letter is X then step over it to avoid repeat, ie aAaA

var makeEveryLetterAfterXCaps = function (str, letter) {
  let index = 0;
  let place = '';
  // Run through the string
  for(let i = 0; i < str.length; i++){
    // If it isn't the last letter in the string
    if(index != str.length - 1){
      if(str[i] === letter){
        // Changes the next letter to uppercase
        place = str[index+1].toUpperCase();
        if(index === str.length-1){
          str = str.substring(0,index+1) + place;
          index++;
        } else {
            str = str.substring(0,index+1) + place + str.substring(index+2);
        }
      }
    }
      index++;
  }
    return str;
}


// I looked at the solutions after solving with ABOVE
// Went line by line to understand their logic and learn more Javascript functionality 

// Split the array into individual indexes
// Since Javascript comparision is case sensitive, chaning the a to capital is different
// rejoin the array at the end. 

var makeEveryLetterAfterXCaps = function (str, letter) {
  // Split the letter by character
  const arr = str.split('');
  // Step through arr
  for(let i = 1; i < arr.length; i++){
    // Checks if the letter before current index is the letter
    if(arr[i-1] === letter){
      // Change the letter to UpperCase
      arr[i] = arr[i].toUpperCase();
    }
  }
  // Rejoins arr by characters 
  return arr.join('')
}
