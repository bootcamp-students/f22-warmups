
function isDivisible(n, x, y) {
//   check if x and y are divisible by n
  if (n % x === 0 && n % y === 0) {
    return true;
  } else {
    return false;
  }
}
