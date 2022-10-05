// Check each element w/ filter
// Make a new array
// If not(NaN) add to new array

function filter_list(l) {
  // Return a new array with the strings filtered out
  
  function isNumber (item) {
    return (!isNaN(item) && (typeof(item) != "string"));
  }
  
  let returnArray = [];
  console.log("List In: ", l);
  returnArray = l.filter(isNumber);
  
  console.log("Returned array from NaN function: ", returnArray);
  return returnArray;
}
