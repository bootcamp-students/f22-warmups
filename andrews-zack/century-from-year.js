// I need the year variable to round up to the nearest century, which will need to be a 1-2 digit number
// Math.round will only round up to the next whole number

function century(year) {
  return Math.ceil(year/100);
}
