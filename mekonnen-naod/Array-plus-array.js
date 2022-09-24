function arrayPlusArray(arr1, arr2) {
  let arrSum = [];
  let sum = 0;
  
  arrSum = arr1.concat(arr2);
  for (let i = 0; i< arrSum.length; i++){
  sum = sum + arrSum[i];
    }
  return sum;
  }
