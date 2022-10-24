// sort through the array so that the number is either the first index or the last
// loop through the array
// if first index is less than the second return the first index
// if the last index is greater than last index minus 1
// if it is than return the last index

function findUniq(arr) {
  // do magic
  arr = arr.sort()
  let max = arr.length - 1
  
  if (arr[0] !== arr[1]) {
    return arr[0]
  } else if (arr[max] !== arr[max - 1]) {
    return arr[max]
  }
  
  console.log(arr)
}
