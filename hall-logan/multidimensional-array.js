
//indexes will be equal to the exaxct location of the value
//I need to find a way to move through the arrays
//use a loop to increment through the arrays to the specified values
//return value


function getElement(array, indexes) {
    for (let i=0; i < indexes.length; i++) {
      array = array[indexes[i]];    
    } 
    return array
}
