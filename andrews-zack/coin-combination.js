// We need the function to cycle through the coins, starting with the highest value coin.
// Dividing the given cents by the value of the coin, and returning the rounded down value of that will show how many of that coin are in cents
// To find the remainder cents, we subtract the number of the coin multiplied by the value of the coin from cents

function coinCombo (cents) {
  let quarters = 0;
  let dimes = 0;
  let nickels = 0;
  let pennies = 0;
  if (cents >= 25) {
    quarters = Math.floor(cents / 25);
    cents = cents - (quarters * 25);
    console.log(quarters);
  } if (cents >= 10) {
    dimes = Math.floor(cents / 10);
    cents = cents - (dimes * 10);
  } if (cents >= 5) {
    nickels = Math.floor(cents / 5);
    cents = cents - (nickels * 5);
  } if (cents >= 1) {
    pennies = cents;
  }
  return [pennies, nickels, dimes, quarters];
}
