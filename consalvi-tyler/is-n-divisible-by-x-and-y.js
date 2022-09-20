/*
get number
if n is divisible by x && y
n % x === 0 && n % y === 0 
return true
else
return false
else return false
*/

function isDivisible(n, x, y) {
    if ((n % x === 0) && (n % y === 0)) {
    return true;
    } else {
        return false;
    }
}