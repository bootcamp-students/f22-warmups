// Find the section of positive integers
// Start at the first positive and once you hit two negatives, pop the last one and add the sum array plus the one negative together.
// Set that number to the sum
// Loop through the rest of the string

// var maxSequence = function(arr){
//   if(arr === undefined){
//     return 0
//   }
//   arr = removeEdgeNeg(arr);
//   let maxSum = sumArray(arr);
//   let posArray = [];
//   let negCount = 0;
//   let checkSum = 0;
//   for (let num of arr){
//     if(num > 0){
//       posArray.push(num)
//     }
//     if(num < 0){
//       negCount++;
//       posArray.push(num)
//       if(negCount >= 2){
//         posArray.pop();
//         checkSum = sumArray(posArray);
//         if(checkSum > maxSum){
//           maxSum = checkSum
//         }
//         posArray.push(num)
//         posArray = popArray(posArray)
//         negCount = 1
//       }
//     }
//   }
//   if(maxSum > 0){
//     return maxSum;
//   }
//   return 0;
// }

// Kadane's algorithm
var maxSequence = function(arr){
  if(arr === undefined){
    return 0
  }
  arr = removeEdgeNeg(arr);
  let maxSize = arr.length;
  let localMax = 0;
  let globalMax = 0;
  for(let i = 0; i < maxSize; i++){
    localMax = localMax + arr[i];
    if(localMax > globalMax){
      globalMax = localMax;
    }
    if(localMax < 0){
      localMax = 0;
    }
  }
  return globalMax;
}

function removeEdgeNeg(arr){
  let index = 0;
  while(arr[index] < 0){
    arr.shift();
  }
  index = arr.length - 1;
  while(arr[index] < 0){
    index--;
    arr.pop();
  }
  return arr;
}

function popArray(arr){
  for(let index of arr){
    if(index < 0){
      arr.shift();
      return arr
    }
    arr.shift();
  }
  return arr;
}

function sumArray(arr){
  let sum = 0;
  for (let index of arr){
    sum += index;
  }
  return sum
}
