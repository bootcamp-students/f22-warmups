function coinCombo (cents) {
    //cents divided by 25
    //quarters is equal to cents divided by 25 and then rounded down.
    let quarters = (Math.floor(cents/25));
console.log(quarters);
    cents -= (quarters*25);
  console.log(quarters);
    let dimes = (Math.floor(cents/10));
    cents -= (dimes*10);
  console.log(dimes);
    let nickels = (Math.floor(cents/5));
    cents -= (nickels*5);
    let pennies = (Math.floor(cents));
    cents -= (pennies);

  return [pennies, nickels, dimes, quarters];
}