//pull arry1 and arry2 into fun
function arrayPlusArray(arr1, arr2) {
  let sum1 = 0;
  let sum2 = 0;
//declare var1 and var2 to hold sum of arrys
  for (const i of arr1){
    sum1 = i + sum1
  }
//loop through array1 added array1 index value to var1, var1 = var1 + array[index];
  for (const i of arr2)
    sum2 = i + sum2
// repeat steps for array2 and var 2
sum1 = sum1 + sum2;
// add var1 to itself and var2 to get sum, var1 = var1 + var2
return sum1;
//return var1 as sum
}

// Need to add arr1 and arr2
// Need to define and add each array
// sum1 will run a for loop to add all of array 1
// sum2 will run a for loop to add all of array 2
// sum1 will add sum1 and sum2
