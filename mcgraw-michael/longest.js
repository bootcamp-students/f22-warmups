function longest(s1, s2) {
    // consolidate to one string
    let str = s1+s2;
    // split strings into 1 array
     let array1 = str.split('');
    let array2 = [];
  //  remove duplicates
    array1.forEach((char) => {
      if (!array2.includes(char)) {
        array2.push(char);
      }
    })
    // sorts alphabetically then converts back into a string
    console.log(array2);
    array2 = array2.sort();
    console.log(array2);
    return array2.join('');
  }
