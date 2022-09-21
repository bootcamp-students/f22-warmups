// Calculate the distance you can drive
// Check that distance against the distanceToPump

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  let newDistance = mpg * fuelLeft;
  return (distanceToPump <= newDistance);
  
 /* if(distanceToPump <= newDistance)
      return true;
    else
        return false;
  
  */
  
};
