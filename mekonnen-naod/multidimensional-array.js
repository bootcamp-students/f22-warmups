


function getElement(array, indexes) {
  // good luck
  let result = 0;
  let arr = array.slice()
  for (let i=0;i<indexes.length;i++){
    arr=arr[indexes[i]]
    result=arr
  }
  return result;
}
  
