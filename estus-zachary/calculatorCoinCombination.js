// Check the number for amount of quarters
// if cents is 28, then Math.floor(28/25) = 1 (the number of quarters)
// 28 - (25 * 1) = 3
// Numbers of cents left
// Repeat for each demonination 

function coinCombo (cents) {
  let quarters = 0;
  let dimes = 0;
  let nickels = 0;
  let pennies = 0;
  if(cents >= 25){
    quarters = Math.floor(cents / 25);
    cents = cents - (25 * quarters);
  } 
  if (cents >= 10){
    dimes = Math.floor(cents / 10);
    cents = cents - (dimes * 10);
  } 
  if (cents >= 5){
    nickels = Math.floor(cents / 5);
    cents = cents - (nickels * 5);
  } 
  if( cents >= 0){
      pennies = cents;
  }
  return [pennies, nickels, dimes, quarters];
}
