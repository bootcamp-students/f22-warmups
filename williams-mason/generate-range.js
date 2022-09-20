function generateRange(min, max, step){
    //declare newNumber as an array
    let newNumber = [];
    //push min to the first number in the arra newNumber
    for (let i = min; i <= max; i = i + step) {
      let nextNumber = i;
      
      
    newNumber.push(nextNumber);
    }
    return(newNumber);
  }