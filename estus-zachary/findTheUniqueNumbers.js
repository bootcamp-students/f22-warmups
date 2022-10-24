function findUniq(arr) {
  // Checking for the first and second index being unique 
  if(arr[0] != arr[1]){
    if(arr[1] != arr[2]){
      return arr[1];
    } else {
      return arr[0];
    }
  } 
  // Loop through the array and checking for unique values
  for(let i = 1; i < arr.length; i++){
    if(arr[i] != arr[i+1] && arr[i] != arr[i-1]){
      return arr[i];
      }
  }
  // If no unique values found yet than the last index is unique
  return arr[arr.length - 1];
}
