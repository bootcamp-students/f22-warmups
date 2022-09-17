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
