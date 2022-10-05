function filter_list(l) {
    // Return a new array with the strings filtered out
    let numList = l.filter((item) => {
     return typeof item === 'number';
      
        console.log(item);
        
      }
    )
    return numList;
    }
