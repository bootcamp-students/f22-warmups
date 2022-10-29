function double(array) {
    // Use array.map() to return a new array with each value twice
    // as large as the corresponding value in the passed in array.
 let newArray = array.map(item => {
   return item * 2
  })
  return newArray
}
