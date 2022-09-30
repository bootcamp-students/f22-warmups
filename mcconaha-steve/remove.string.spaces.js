function noSpace(x){
    let y = x.split(" ");
    console.log(y);
    console.log(x);
    let z = y.join("");
    console.log(z);
    return(z);
  };
  
  /*  FIRST ATTEMPT
  loop through index of the string  
    for (let i = 0; i < x.length; i++) {
  //    if index[i] = 'space' then replace with ''
      if (x[i] === (' ')) {
        x[i] = ('');
        console.log(x);
  //    ELSE index[i] = index[i]
      } else {
        x[i] = x[i];
      }
    } return x;
  }; 
  */
