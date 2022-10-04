function highAndLow(numbers){
    //split string of numbers into an array
    let numArray = numbers.split(' ');
    numArray.forEach((item) => {
//   converts each item to a number
      Number(item);
      console.log(item);
    })
//   sorts array numerically and returns the first and last value
    numArray.sort((a,b) => {
      {return a - b}
      }); console.log(numArray)
   return `${numArray[numArray.length-1]} ${numArray[0]}`
     
  }
