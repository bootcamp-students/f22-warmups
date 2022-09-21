const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // IF distanceToPump divided by (mpg times fuelLeft) is >= 1
    //      THEN TRUE you are going to make it
    //   ELSE FALSE you will not make it
    return(distanceToPump / (mpg * fuelLeft)) <= 1;
  };
