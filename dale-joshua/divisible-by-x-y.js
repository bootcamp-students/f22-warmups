//Divide N by bot X and Y
//If remainder is a whole number on "n/x" or "n/y"
//Return "N is divisible by X" or "N is divisible by Y" respectively 
function isDivisible(n, x, y) {
  if (n % x === 0 && n % y ===0) {
    return (true);
  } else {
    return (false);
  }
}
