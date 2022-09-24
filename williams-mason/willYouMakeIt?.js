const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // mpg times fuelLeft declared as howFar
    let howFar = mpg * fuelLeft;
  // compare howFar to distanceToPump
    
    if (howFar < distanceToPump) {
      return false;
    }
    if (howFar >= distanceToPump) {
      return true;
    }
  };