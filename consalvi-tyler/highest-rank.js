/*
sort the array
initialize count at 1
initialize empty array for objects
create object class for num and count 
loop through sorted array
if current index is equal to next index
  increment count
else 
  push new obj to array with value of current index and count
  reset count to 1
sort array of objects based on count prop
return num value of last index of counts array
*/

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
