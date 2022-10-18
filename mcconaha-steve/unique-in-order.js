var uniqueInOrder=function(iterable){
  if (!iterable) {
    return [];
  }
  let arr = [];
  //create uniqueArray to house unique values
  let uniqueArray = [];
  //if iterable is a string then convert to an array using split, call new variable arr
  //else iterable is a array, call new variable arr
  uniqueArray.push(iterable[0]);
  typeof iterable === 'string' ? arr = iterable.split('') : arr = iterable;
  //console.log(typeof iterable);
  //push indx 0 to uniqueArray
  for (let i = 1; i < arr.length; i++) {
  //loop through arr and if arr [i] equals uniqueArray [i] **CORRECTION** must be uniqueArray[uniqueArray.length -1] then push the unique value into uniqueArray
    if (arr[i] !== uniqueArray[uniqueArray.length - 1]) {
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
  //return the value
  //   if (uniqueArray[0] !== undefined) {  //equivalent to if(iterable)  because iterable will equate to undefined 
  //     return uniqueArray;
  //       } else {
  //     return [];
