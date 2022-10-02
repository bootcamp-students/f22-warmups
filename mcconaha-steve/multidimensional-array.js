function getElement(array, indexes) {
  //given an array and an index to look at within that array
  //need to go into the index inside of an array
  //loop through index
  //update array to reflect new index value
  //array.length > 0
  //indices.length > 0
  for(let i of indexes){
    //first pass, array = [1,2]
    //second pass, array = [1]
    array = array[i];
    console.log(array);
  }
  return array;
}

console.log(getElement([[1, 2], [3, 4], [5, 6]], [0,0]));
