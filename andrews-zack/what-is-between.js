// Starting at a and ending at b, we need to push each result into an array
function between(a, b) {
// Declaring new array to push numbers into
let newArr = [];
// Starting for loop starting at a, and incrementing through b
  for (let i = a; i <= b; i++) {
    // Pushing each number we get into our new array
    newArr.push(i);
  }
  return newArr;
}
