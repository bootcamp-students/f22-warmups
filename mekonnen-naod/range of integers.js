// 
// 
// 
// 

function generateRange(min, max, step){
  let newArray = [];
  for (let i=min; i<=max; i += step) {
    newArray.push(i);
  }
  return newArray;
}
