function coinCombo (cents) {
	let quart = 0;
  let dime = 0;
  let nic = 0;
  let penny = 0;

  if (cents >= 25) {
    quart = Math.floor(cents / 25);
    cents = cents - (25 * quart);
  } if (cents >= 10) {
    dime = Math.floor(cents / 10);
    cents = cents - (dime * 10);
  } if (cents >= 5) {
    nic = Math.floor(cents / 5);
    cents = cents - (nic * 5);
  } if (cents >= 0) {
    penny = cents;
  }
  return [penny, nic, dime, quart]
