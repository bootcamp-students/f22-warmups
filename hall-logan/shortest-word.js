// string is never empty
// find the shortest word
// use .split to turn it into an array X
// loop through the string X
// get the length of each item X
// push that item into a global array
// return the minumum number using the spread funciton a long with Math.min

function findShort(s){
//   console.log(s)
  let array = s.split(' ')
  let newArray = []
  for(let i = 0; i < array.length; i++ ){
    newArray.push(array[i].length)
//     console.log(newArray)
//     console.log(number)
    
  }
  return Math.min(...newArray)
   
}
