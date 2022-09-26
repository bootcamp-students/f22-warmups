// cents / .25 = quarters
// cents = cents - (quarters)
// cents / .10 = dimes
// cents = cents - (dimes)
// cents / .05 = nickels
// cents = cents - (nickels)
// cents = pennies

function coinCombo (cents) {
  let totalIn = cents;
  let quarters = Math.floor(cents/25);
  totalIn = totalIn - (quarters * 25);
  console.log("Total in = " + cents); 
  console.log("Number of quarters: " + quarters);
  console.log("New total:" + totalIn);
  
  let dimes = Math.floor(totalIn/10);
  totalIn = totalIn - (dimes * 10);
  console.log("Total in = " + cents); 
  console.log("Number of dimes: " + dimes);
  console.log("New total:" + totalIn);
  
  let nickels = Math.floor(totalIn/5);
  totalIn = totalIn - (nickels * 5);
  console.log("Total in = " + cents); 
  console.log("Number of nickels: " + nickels);
  console.log("New total:" + totalIn);
  
  let pennies = totalIn;
  totalIn = totalIn - (pennies);
  console.log("Total in = " + cents); 
  console.log("Number of pennies: " + pennies);
  console.log("New total:" + totalIn);
  
  return [pennies, nickels, dimes, quarters];
}
