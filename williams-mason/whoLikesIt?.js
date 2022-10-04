function likes(names) {
    // TODO
    console.log(names);
    if (names.length === 0){
      return 'no one likes this'
    };
     if (names.length === 1){
       console.log(names[0])
      return names[0] + ' likes this'
    };
    if (names.length === 2){
      return names[0] + ' and '+ names[1] + ' like this'
    };
    if (names.length === 3) {
      return names[0] + ', '+ names[1] + ' and ' + names[2] + ' like this'
    }
    if (names.length>= 4){
      let number = names.slice(2)
      console.log(number.length)
      return names[0] + ', '+ names[1] +' and ' + number.length + ' others like this'
    }
  };