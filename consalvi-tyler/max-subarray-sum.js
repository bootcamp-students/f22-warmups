var maxSequence = function(arr){
  
  if(!arr.length) {
    return 0
  }
  
  //To make sure the loop fires off the first time
  let currentMax = -(999 * 999)
  //The current sum
  let currentSum = 0
      
  for (let i = 0; i < arr.length; i++) {
    //Add the current value of arr[i] to the current sum
       currentSum += arr[i]
      
      if (currentMax < currentSum) {
           currentMax = currentSum
      }
      if (currentSum < 0) {
             currentSum = 0
      }
  }
  
  if (Math.sign(currentMax) === -1) {
    return 0
  }
  
  return currentMax
  
}
