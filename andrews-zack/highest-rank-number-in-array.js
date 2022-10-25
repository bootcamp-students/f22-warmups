// sort the array
// loop through and see if the index we're checking equals the one after it
// if it does we increase a count and push that number into an array
// when it doesn't the equal the index after it, reset the second counter
// return the last index in the array

function highestRank(arr){
  let sort = arr.sort();
  let count = 0;
  let otherCount = 0;
  let answer = [];
  for (let i=0; i<sort.length; i++) {
    if(sort[i] === sort[i+1]) {
      otherCount++
      if(otherCount >= count){
        count = otherCount
        answer.push(sort[i])
      } 
    } else {
        otherCount = 0
      }
  }
  return answer[(answer.length-1)]
}
