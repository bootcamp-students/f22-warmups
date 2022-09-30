function calculate(str) {
    ////ORIGINAL THOUGHTS
    // replaceAll plus with p and minus with m
    //loop through the string
    //let sum = 0
    //if number then convert to number isNaN
      // sum = sum[i]
    //else if i = p then
    // sum = sum + 
    /*for (let i of str); {
      if indexOf(str, i) = 'plus' {
        str = str.replace('plus','+');
      if str.indexOf(str, i) = 'minus' {
        str = str.replace('minus','-');
      };
    console.log(str);
    */
    //While string includes 'plus' replace with +
    while (str.includes('plus')) {
      str = str.replace('plus', '+');
    //While string includes 'minus' replace with -      
    }
    while (str.includes('minus')) {
      str = str.replace('minus', '-');
    }
    //Perform calculations on string  
    str = eval(str);
    //Convert back to string
    str = str.toString();
    return str;
    }
