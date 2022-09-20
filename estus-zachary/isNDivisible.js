// If n%x === 0 it is divisible by that number
// Ternary syntax Condition ? true : false

function isDivisible(n, x, y) {
  return (n % x === 0 && n % y === 0);
}
