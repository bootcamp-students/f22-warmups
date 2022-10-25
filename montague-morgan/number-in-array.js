// sort the array
// create count and set as 1
// create an empty array which will hold objects
// loop through sorted array
// if current index is equal to the next index
  // increment count (count++)
// else
//  push new obj into the empty array with value of current index and count
//  rest the count to 1
// sort array of objects based on count
// return number value of last index of the array

function highestRank(arr){
  arr = arr.sort()
  let count = 1
  let numCounts = []
  
  class numCount {
  constructor(num, countOf) {
    this.num = num;
    this.countOf = count;
  }
}
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i+1]) {
      count++
    } else if (arr[i] !== arr[i+1]) {
      numCounts.push( new numCount(arr[i], count))
      count = 1
    }
  }
  
  numCounts = numCounts.sort((a, b) => a.countOf - b.countOf)
  
  return numCounts[numCounts.length - 1].num
  
}
