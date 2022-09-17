// Get the sum start with 0;
// if both numbers are the same return just one number
// Find the smaller number and incrementally step up. adding the step to the sum
// return the sum

function getSum( a,b )
{
  if(a === b) return a;
  let sum = 0;
  if( a < b){
    while(a <= b){
      sum = sum + a;
      a++;
    }
  } else {
    while(b <= a){
      sum = sum + b;
      b++;
    }
  }
  return sum;
}
