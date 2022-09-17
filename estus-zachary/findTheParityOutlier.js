// Step through the array of integers and check if they are odd or even
// Keep track of the count of even and odd
// Each time count is increased save that number for a return value
// This saves the program from having to step through the array again
// return saved number based off the number of even or odds.

function findOutlier(integers){
  let even = 0;
  let odd = 0;
  let evenOutlier, oddOutlier;
  for(let i of integers){
    if(i%2 === 0){
      even++;
      evenOutlier = i;
    } else {
      oddOutlier = i;
      odd++
    }
  }
  if (even === 1)
        return evenOutlier;
  else if(odd === 1)
        return oddOutlier;
      
}
