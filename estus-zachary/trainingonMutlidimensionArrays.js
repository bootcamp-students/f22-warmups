// loop through the values of indexes
// This will give us the "directions" to the array we need
// Set the array to the array at indexes[i]
function getElement(array, indexes) {
  for(let i of indexes){
    array = array[i];
  }
  return array;
}
