// Pseudocode
//
// Create a function that checks if a number n is divisible by two numbers x AND y. 
// All inputs are positive, non-zero numbers.
//
// BEGIN
// IF n % x = 0 AND IF n % y = 0
// RETURN true
// ELSE
// RETURN false
// END


function isDivisible(n, x, y) {
  return ((n%x==0) && (n%y==0));
  
//   if ((n%x==0) && (n%y==0)) {
//     return true;
//   } else {
//     return false;
//   }
}
