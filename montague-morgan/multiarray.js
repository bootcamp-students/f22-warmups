function getElement(array, indexes) {
//   console.log(array)
  console.log(indexes)
  for (let i = 0; i < indexes.length; i++){
     array = array[indexes[i]]
  }
  console.log(array)
   return array
}

// given array, then a position is given and we need to return what is there 
// loop through the array and set the output to the desired location
// example would be [1,2,[3,4,5]] [0,1] would be 2
