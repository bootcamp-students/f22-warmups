// sort numbers from lowest to highest
// get the 2 lowest numbers
// add them togerher
// return sum

function sumTwoSmallestNumbers(numbers) {  
  const sortedNums = numbers.sort(function(a,b){ return a -b });
  let numsToAdd = sortedNums.slice(0,2);
  return numsToAdd[0] + numsToAdd[1];
}
