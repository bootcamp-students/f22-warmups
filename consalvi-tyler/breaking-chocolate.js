/*
need a formula for the number of breaks
return formula answer
if there is no chocolate, return 0
*/

function breakChocolate(n,m) {
    if ((n * m) >= 1) {
    return ((n * m) - 1);
      } else {return 0}
  }