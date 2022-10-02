function calculate(str) {
//   let 'plus' = +
//   let 'minus' = -
//   str.replaceAll('plus', +)
//   console.log(eval)
  
return (eval(str.replace(/(plus)/gi,'+').replace(/(minus)/gi,'-'))).toString();

}
