function calculate(str) {

    for (let i of str) {
    
    str = str.replace('plus', '+');
    console.log(str);
    str = str.replace('minus', '-');
    console.log(str);
      }
   str = eval(str);
    console.log(str);
    str = str.toString();
  return str;
  }