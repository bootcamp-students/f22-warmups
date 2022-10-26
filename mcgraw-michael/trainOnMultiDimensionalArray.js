function getElement(array, indexes) {
  console.log(array, 'given array')
  console.log(indexes, 'given index')
//   loop through given indexes
 for (let i of indexes) {
   console.log(i, 'i')
   console.log(array[i], 'array of index i')
   array = array[i] 
   console.log(array, 'array after assignment')
 }
  return array
}
