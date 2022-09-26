// return a combination of the smallest possible combination of coins for the cent value
// input:cent amount
// output:an array of coin combinations equaling the given cent value
// still not sure how this works

function coinCombo (cents) {
	let centsIn = cents;
  let totalOut = [];
  let quarters = Math.floor(centsIn/25);
  centsIn = centsIn - (quarters*25);
  
  let dimes = Math.floor(centsIn/10);
  centsIn = centsIn - (dimes*10);
  
  let nickels = Math.floor(centsIn/5);
  centsIn = centsIn - (nickels*5);
  
  let pennies = centsIn;
  pennies == centsIn - (pennies);
  
  return [pennies, nickels, dimes, quarters];
}
