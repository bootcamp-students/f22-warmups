// Pseudocode
// 



function coinCombo (cents) {
  let totalChange = cents;
  
  let quarters = Math.floor(totalChange/25);
  totalChange = totalChange - (quarters * 25);
  console.log(quarters);
  
  
  let dimes = Math.floor(totalChange/10);
  totalChange = totalChange - (dimes *10);
  console.log(dimes);
  
  let nickels = Math.floor(totalChange/5);
  totalChange = totalChange - (nickels * 5);
  console.log(nickels);
  
  let pennies = Math.floor(totalChange/1);
  pennies == totalChange - (pennies * 1);
  
	return [pennies, nickels, dimes, quarters];
}
