// Loop through the array
// Loop through the array again
// Check if the values are equal, if so increase the oddcount
// If the oddcount % 2 is not 0 that number has an odd count
// Setting the count to 0 enables the the check num against itself to be even or odd. 

function findOdd(A) {
  if(A.length === 1){
    return A[0];
  }
  let oddCount = 0;
  for(let num of A){
    for(let double of A){
      if(num === double){
        oddCount++;
      }
    }
    if(oddCount % 2 != 0){
      return num;
    }
  }
  return 0;
}
