const uniqueInOrder = function(iterable){
    const result = [];
    for(let i=0; i<=iterable.length; i++) {
      if(iterable[i] !== iterable[i + 1]) {
        result.push(iterable[i]);
      }
    }
    return result;
  }