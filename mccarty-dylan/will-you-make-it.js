const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  const milesLeft = fuelLeft * mpg
  if (milesLeft >= distanceToPump) {
    return true
    } else {
    return false
  }
  
};


// milesleft = fuel * mpg
// miles greater than or equal too pump 
// return true 
// else 
// return false
