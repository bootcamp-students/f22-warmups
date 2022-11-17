// Returns number of complete beeramid levels
var beeramid = function(bonus, price) {
    
  let num = Math.floor(bonus/price);
  let x = 1;
  let y = 1;
  
  if (num <= 0) {
    return 0;
  }
  
  if (num <= 4) {
    return 1;
  }

  for (let i = 1; i <= 100; i++) {
    x = x+1;
    y = y + x**2
    if (y == num) {
      return i + 1;
    } else if (y > num) {
      return i;
    }
  }
}
