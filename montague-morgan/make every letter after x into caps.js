var makeEveryLetterAfterXCaps = function (str, letter) {
//   console.log(str);
  let newArr = str.split('');
  console.log(newArr)
  for(let i = 1; i< newArr.length; i++){
    if(newArr[i-1]===letter){
      console.log('true position for letter', i)
      newArr[i] = newArr[i].toUpperCase()

      console.log(newArr[i])
    }
  }
  return newArr.join('')
}

// let test = [
//   'w', 'h', 'e', 'r', 'e',
//   ' ', 'a', 'r', 'e', ' ',
//   't', 'h', 'e', 'y', ' ',
//   'n', 'o', 'w'
// ]

// let target = ' '

// for(let j=1; j<test.length; j++){
//   if (test[j-1] === target) {
//     console.log(j)
//     test[j] = test[j].toUpperCase()
//     console.log(test[j])
//     }
//     }
//     return console.log(test.join())
/////////////////AHHHHHHHHHHHHHHHHHHHHHHHHHHHH SO ANNOYING
  


///////NUKE AND REPAVE
//     let realTarget = j + 1
//     console.log(realTarget)
//     if(test[j] !== realTarget){
//       console.log(test[realTarget])
//       let cappp = test[`${realTarget}`].toUpperCase()
//       console.log(cappp)
//       test[realTarget] = cappp
//       console.log(test)

// given a string of full of letters
// a letter will be given and I need to captilize the next letter
// x can be a space and if string of the desired letter will look like aaaa, a => aAaA

// need to first split the array into an array we will use '' to get each letter and space
// we can make a for loop and loop newArr, and set it to find the letter wanted with an if === letter
// we will now add 1 to the the given i to find the next letter


  
//   let newString = 1 + (str.indexOf(letter));
//   // new string will find the letter and add 1, this allows us to target the following array position
// //   console.log(newString);
//   // returns 2 because it finds a, which is in the 1 position and adds 1 
// //   newString = str.charAt(newString);
//   console.log(newString)
//   // this now will find the desired letter and using the positioning
// //   console.log(newString)
//   let insertString = newString.toUpperCase(newString);
//   console.log(insertString)
//   //This captilizes the specified position in the array
// //   console.log(insertString)
//   let y = str.split(newString).join(insertString);
//   console.log(y)
//   //splits and removes the old uncaptilized version and joins the gap with insertString which is 
//   // the captial
  
// //   console.log(y)
  
  
//   return y
