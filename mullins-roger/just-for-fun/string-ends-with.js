function solution(str, ending){
  // TODO: complete
  
  if (ending.length === 0) {
    return true;
  }
  
  if (ending.length > str.length) {
    return false;
  }
  
  let endOfIncoming = str.slice(-(ending.length));
  
  if (endOfIncoming === ending) {
    return true;
  } else {
    return false;
  }
}
