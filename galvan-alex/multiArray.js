//two inputs
//multy dim array
// indexes

// return array indexed at indexes value
//each loop iterates and re-assings array to current state.


function getElement(array, indexes) {
    
  for(let i=0; i<indexes.length; i++){
    array = array[indexes[i]];
    
  }
  return array
}
