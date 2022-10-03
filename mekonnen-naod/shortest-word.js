// creat an array by splitting the sttring
// create a variable and set to the length of the first item in the index
// loop through the array
// if lenght of array[i] is less than the variable created above, return that variable

function findShort(s){
  let myArray = s.split(' ');
  let min = myArray[0].length;
  for (let i = 1; i < myArray.length; i++) {
    if (myArray[i].length < min) {
      min = myArray[i].length;
    }
  }
  return min
}
