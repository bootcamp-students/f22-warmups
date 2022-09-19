// Need to add arr1 and arr2
// Need to define and add each array
// sum1 will run a for loop to add all of array 1
// sum2 will run a for loop to add all of array 2
// sum3 will add sum1 and sum2
function arrayPlusArray(arr1, arr2) {
  let sum1 = 0;
  let sum2 = 0;
  let sum3 = 0;
  for (const i of arr1){
    sum1 =  i + sum1
  }
  for (const i of arr2){
    sum2 = i +sum2
  }
  sum3 = sum1 + sum2
 console.log(sum3)
  return sum3; 
}
