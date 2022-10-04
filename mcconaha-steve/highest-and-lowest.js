function highAndLow(numbers){
  let max = -Infinity;
  let min = Infinity;
    //split string into array
  let splitNumbers; //new variable not necessary but helps me see what is going on
  splitNumbers = numbers.split(' ');
    //have to convert the string resulting from the split to a number
  splitNumbers = splitNumbers.map((number) => {
    return Number(number);
  });
    //loop through array and reassign min and max values
  splitNumbers.forEach((number) => {
   //assign value to min index
  //assign value to max index
      if (number > max) {
        max = number;
      }
      if (number < min) {
        min = number;
      }
  });
   //return min and max
  return `${max} ${min}`;
}
