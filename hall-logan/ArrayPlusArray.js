//create a functionthat incldes 2 parameters call arrayPlusArry
// create an empty variable that will contain the sum.
// loop through both arrays and sum each number.
// retuns the sum of all numbers
function arrayPlusArray(arr1, arr2){
  let sumAll = 0;
  for (let i=0; i<arr1.length; i++){
    sumAll += arr1[i];
  }
  for (let i=0; i<arr2.length; i++){
    sumAll += arr2[i];
    console.log(sumAll)
  }
  return sumAll
}
