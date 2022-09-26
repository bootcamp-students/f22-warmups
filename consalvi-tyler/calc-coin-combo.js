/*
set values for cents / coins
check from quarter down
IF quarter > 1 {
    cents = (cents - (25 * quarter))
}
push values into array
*/

function coinCombo (cents) {
    const quarter = Math.floor(cents / 25)
    const dime = Math.floor((cents % 25)/10)
    const nickel = Math.floor(((cents % 25)% 10)/5)
    const penney = Math.floor(cents % 5)

	return [penney, nickel, dime, quarter]
}