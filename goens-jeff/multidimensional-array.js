// pseudocode

// loop through indexes
// set array equal to itself with the indexes iteration values
// return array

function getElement(array, indexes) {
  for (let i=0; i < indexes.length; i++) {
    array = array[indexes[i]];
  }
  return array;
}
