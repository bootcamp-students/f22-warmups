function scramble(str1, str2){
  const reducer = (container, element) => {
    if(container[element] === undefined) {
      container[element] = 1;
      return container;
    } else {
      container[element] += 1;
      return container;
    }
  }
  
  var container1 = str1.split('').reduce(reducer,{});
  
  var container2 = str2.split('').reduce(reducer,{});
  
  for (var prop in container2) {
    if(!container1[prop]) return false;
    
    if(container1[prop] < container2[prop]) return false;
  }
  return true;
}
