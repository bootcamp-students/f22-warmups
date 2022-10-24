// all numbers in the array are equal except for one
// find that one number
// it's guaranteed that array contains atleast 3 numbers
// the test uses large arrays
// use sort method to sort array ascending
// use a conditional to compare if a number at index 0 and a number at index 1 are equal
// if they're unequal, return the arr @ index 0
// if they're equal, return an array by subtracting one from the length

function findUniq(arr) {
   arr = arr.sort((a, b) => a - b);
  if(arr[0] !== arr[1]){
    return arr[0]
  console.log(arr[0])
  }
  else{
    return arr[arr.length - 1]
  }
}










