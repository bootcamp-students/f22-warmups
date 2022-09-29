// We need to loop through the index of indexes to break down the multiversal features of array

function getElement(array, indexes) {
  for (let i = 0; i < indexes.length; i++) {
    array = array[indexes[i]];
  } return array
}
