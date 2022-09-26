/*
let cent = year / 100
if the remainder of year % 100 is greater than 1
add 1 to total
*/

function century(year) {
    let cent = year / 100;
    return Math.ceil(cent);
  }