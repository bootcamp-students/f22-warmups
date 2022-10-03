

// let penny/nickel/dime/quarter = 0
// while cents is less than or equal to the number of a coin
// minus the coins amount to cents and make the coin ++
// do that for every coin

function coinCombo (cents) {
// let penny/nickel/dime/quarter = 0
  let penny = 0, nickel = 0, dime = 0, quarter = 0

  // while cents is less than or equal to the number of a coin
  while (cents >= 25) {
    cents -= 25
    quarter++
  }
  while (cents >= 10) {
    cents -= 10
    dime++
  }
  while (cents >= 5) {
    cents -= 5
    nickel++
  }
  while (cents > 0) {
    cents -= 1
    penny++
  }
  return [penny, nickel, dime, quarter]
  
}
