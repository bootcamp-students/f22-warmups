function findOdd(A) {
  //input array of integers, can be negative
  //return integer that appears odd number of times
  //sort the array
  //traverse the array, move ahead while there are duplicates
  //else return the value
  A.sort(function(a,b) {
    return a-b;
  });
  console.log(A);
  for (let i = 0; i <A.length; i++) {
    if (A[i] == A[i + 1]) {
    i++;  
    } else {
      return A[i]; 
    }
  }
}
