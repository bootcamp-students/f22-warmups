/* 
get full sum each individual array
FOR loop add each integer to the sum
    sum1 = 0
    for num of arr1 sum += nums(2)
add full sums of each array
    finalSum = arr1Sum + arr2Sum
return a number
    return finalSum
*/

function arrayPlusArray(arr1, arr2) {
    let arr1Sum = 0;
    let arr2Sum = 0;
    for (let nums of arr1) {
      arr1Sum += nums
    };
    for (let nums2 of arr2) {
      arr2Sum += nums2
    };
    let finalSum = (arr1Sum + arr2Sum);
    return finalSum;
  };