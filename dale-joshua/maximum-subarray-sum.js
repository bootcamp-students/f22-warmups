var maxSequence = function(arr){
  let maxSum = 0
    let currentSum = 0
    for(let i = 0; i < arr.length; i++){ 
        currentSum = Math.max(arr[i], currentSum + arr[i])
        maxSum = Math.max(currentSum, maxSum)
      console.log(currentSum, maxSum)
        
    }
  if(maxSum < 0) {
    return 0
  }
  else {
    return maxSum
    }
