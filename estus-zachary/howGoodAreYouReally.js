// Find the class average by steppign through the array
// Keep track of class size to calculate the average
// Then compare the average to your score and return a boolean

function betterThanAverage(classPoints, yourPoints) {
  let average = 0;
  let classSize = 0;
  for(let i of classPoints){
    average += i;
    classSize++;
  }
  average /= classSize;
  if(yourPoints > average)
    return true;
  else 
    return false;
}
