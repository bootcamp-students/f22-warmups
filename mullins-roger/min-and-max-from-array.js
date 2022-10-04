// Split string into array

function highAndLow(numbers){
  // ...
  
   let newNumbers = [];
  
//   numbers.forEach(
//     //let parsedString = parseInt(numbers);
//     //console.log("Parsed string is: ", parsedString);
//     console.log(numbers);
//     newNumbers.push(numbers);
//   );
//   console.log("newNumbers is: ", newNumbers);
//   let parsedString = parseInt(numbers);
//   console.log("Parsed string is: ", parsedString);

  let numbersString = numbers.split(" ");
  console.log(numbersString);
  
  numbersString.forEach(element => {
    console.log(parseInt(element));
    newNumbers.push(parseInt(element));
    });
  
  console.log("Outside forEach newNumbers = ", newNumbers);
  console.log("Type of first element: ", typeof(newNumbers[5]));
  
  let min = Math.min(...newNumbers);
  let max = Math.max(...newNumbers);
  //console.log(numbersString);
  
//   console.log("TEST SECTION");
//   let testArray = [8, 3, -5, 42, -1, 0, 0, -9, 4, 7, 4, -4];
//   let testMin = Math.min(testArray);
//   let testMax = Math.max(testArray);
//   console.log(testMin);
//   console.log(testMax);
  
  
  console.log("Minimum: ", min);
  console.log("Maximum: ", max);
  return(`${max} ${min}`);
}
