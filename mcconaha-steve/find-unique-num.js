function findUniq(arr) {
  //Assign index 0 to variableOne
  // loop through array starting at index 1
  // IF variable at index i is === variableOne
  //    THEN continue looping until a variable !== variableOne AND return than value
  //ELSE assign variable at index 1 to variableTwo
  //      THEN and capture the count of each variable
  //      IF variableOne count === 1 THEN return variableOne ELSE return variableTwo
  // So I could not get the syntax right on this and overhead sort method. This was much easier
  
  arr = arr.sort();
  if (arr[0] === arr[1]) {
    return arr[arr.length - 1];
  } else {
    return arr[0];
  }
}
