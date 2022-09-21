//   it needs to return a boolean (true/false)
//   nearest pump is 50 miles (distanceToPump) away
//   car has 25 miles per gallon(mpg)
//   there are 2 gallons(fuelLeft) left
//   fuelLeft * mpg = distanceToPump 
//    if distanceToPump doesnt equal fuelleft * mpg return false if it does return true

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TODO
 return distanceToPump <= (mpg*fuelLeft)
};
