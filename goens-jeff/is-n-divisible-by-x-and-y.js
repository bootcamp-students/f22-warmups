
// CREATE function
// IF n is divisible by x
// RETURN true
// IF n is divisible by y
// RETURN true
// ELSE return false

function isDivisible(n, x, y) {
  if ((n % x === 0) && (n % y === 0)) {
    return true;
  } else {
    return false;
  }
}
