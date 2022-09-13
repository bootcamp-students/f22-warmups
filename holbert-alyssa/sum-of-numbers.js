//INPUT a and b
      //LET min = the lesser of the two values
      //LET max = the greater of the two values
      //RETURN (max - min + 1) * (min + max) / 2
     

function getSum( a,b )
{
   let min = Math.min(a, b),
      max = Math.max(a, b);
     return (max - min + 1) * (min + max) / 2;
}
