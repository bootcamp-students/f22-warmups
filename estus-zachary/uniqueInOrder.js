var uniqueInOrder=function(iter){
  
 // create a unique array, filter out non unique valuues
// push the value to a new array
// Check that value against the value thay just got pushed
  if(!iter){
    return [];
  }
  let newArr = [];
  newArr.push(iter[0]);
  for(let item of iter){
    if( item != newArr[newArr.length - 1]){
      newArr.push(item);
    }
  }
  return newArr;
}
