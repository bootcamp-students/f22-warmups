// The remainder of n/x and n/y both have to equal 0
function isDivisible(n, x, y) {
  // instead of an if statement, using return with a ternary operator 
  return ((n%x === 0) && (n%y === 0)) ? true:false; 
}
