//CREATE function that thakes two ints
// a < b
//create an array to hold nums between a and b
//loop throuh the interval between a and b
//push each interval into array
//return an array of integers between the input params, including


function between(a, b) {
  
  let arr = [];
  for (let i=a; i<=b; i++){
    arr.push(i);
  }
  return arr;
  
}
