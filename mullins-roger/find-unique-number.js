// Get first element of array
// Slice remainder of array from test
// if array includes test, move on to the next

function findUniq(arr) {
  // do magic
  //console.log("Array in: ", arr);
  for (let i=0; i<arr.length; i++) {
    //console.log("Filtering for ", arr[i])
    if (arr[i] != arr[i+1]) {
      var testArray = arr.filter(item => item===arr[i]);
      //console.log(testArray);
      if (testArray.length === 1) {
        //console.log("Returning ", arr[i]);
        return arr[i];
      }
    }
  }
}
