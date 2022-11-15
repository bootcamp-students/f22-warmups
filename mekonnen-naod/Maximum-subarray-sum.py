var maxSequence = function(arr){

let maxSum = 0;
let subSum = 0

for(let i=0; i<arr.length; i++){
  
  subSum = Math.max(arr[i], subSum + arr[i])
  maxSum = Math.max(subSum, maxSum)
}


return maxSum

}
