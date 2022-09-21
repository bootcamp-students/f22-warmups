// Pseudocode
// CREATE array
// CREATE if else comparison
// RETURN value
// 


const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  let solution = distanceToPump/fuelLeft
  if (solution <= mpg) {
    return true;
  } else {
    return false;
  }
};
