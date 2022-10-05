// cant just pull numbers has to only be strings
// forEach()

// create a empty array
// loop through array
// test for typeOf
// if typeOf === integer
//   push into empty newArray
// return newArray


function filter_list(l) {
  // Return a new array with the strings filtered out
  let array = []
  
  l.forEach(item => {
    if ((typeof item) == 'number'){
      console.log(l)
      array.push(item)
    }
    
  })
  return array
  console.log(array)
}
