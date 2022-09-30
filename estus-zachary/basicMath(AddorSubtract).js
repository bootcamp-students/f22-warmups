// Split the string by pluses, getting rid of them
// join the string with + IE 1 + 1 + 2 + 3
// Split the string by minues, elimaniting them
// Join the new array with minnues 1 - 2 - 3- 4
// eval Takes a string and uses the operands inside to evalulate the new answer

function calculate(str) {
  str = str.split('plus');
  str = str.join('+');
  str = str.split('minus');
  str = str.join('-');
  
return eval(str) + '';
}
