var uniqueInOrder=function(iterable){
  let arr1 = []
  arr1[0] = iterable[0]  
  if (!iterable){
    return []
  }
  for(let i = 0; i < iterable.length; i++){
    if(iterable[i] !== arr1[arr1.length - 1]){
      arr1.push(iterable[i])
    }
  }
  return arr1
}
