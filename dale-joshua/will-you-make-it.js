const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // mpg * fuelLeft
  // if value === distance to pump return true
  let range = mpg * fuelLeft;
  if (range >= distanceToPump){
    return true
  } else {
    return false
  }
};
