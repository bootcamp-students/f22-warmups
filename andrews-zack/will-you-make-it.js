// We calculate how far the car can make it by multiplying mpg and fuelLeft
// If the new distance we calculate is less than the distanceToPump, we will not make it

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  //Establish new distance variable 
 let newDistance = (mpg * fuelLeft);
  // Test to see if distance to pump is farther than new distance with boolean
  return (distanceToPump <= newDistance);
};
