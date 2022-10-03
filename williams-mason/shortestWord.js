function findShort(s){
    // /first we need to split the array into each word by splitting by a space
    let array = s.split(' ');
    console.log(array);
    //then we sort using the method .sort, we declare parameters using the method .length to sort by the number of characters in each string
    const asc = array.sort((a,b) => a.length - b.length);
    // we return the first index of the array by length
    console.log(asc);
    return asc[0].length;
  }