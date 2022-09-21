const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TODO
  //mutiply mpg by fuelleft
  //check if equal to distancetopump
  let range = mpg * fuelLeft
  console.log(range)
  if (range === distanceToPump) {
      return true;
  } else {
    return false
  }
  
};
