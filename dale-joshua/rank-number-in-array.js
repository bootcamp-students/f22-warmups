function highestRank(arr){
  let count = {};
  let maxval = 0;
  let max = '';
for (const element of arr)  {
  if (count[element]) {
    count[element] +=1
  } else {
    count[element] = 1
  }
  }
  
for(let item in count){
  if(count[item]>= maxval){
    maxval = count[item];
    max= item
  }
}
  return parseInt(max);

}
