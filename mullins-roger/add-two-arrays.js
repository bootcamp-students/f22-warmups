// Pseudocode
//
// BEGIN
// CONCATENATE the incoming arrays
// SET total=0
// LOOP through combined array, summing the elements
//  BEGIN
//  ADD current element to total
//  END
// RETURN total

function arrayPlusArray(arr1, arr2) {
  let totalArray = [];
  let total=0;
  totalArray = arr1.concat(arr2); //+ arr2; //something went wrong
  for (let i = 0; i < totalArray.length; i++) {
    total = total + totalArray[i];
  }
  return total;
}
