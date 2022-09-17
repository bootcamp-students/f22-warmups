// Create an array
// While the given number is less than 0 add it the new array
// Decrease n to 0

const reverseSeq = n => {
  let arr = [];
  while(n > 0){
    arr.push(n);
    n--;
  }
  return arr;
};
