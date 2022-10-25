function highestRank(arr){
  //Your Code logic should written here
  let count = -1;
  let rankNum = 0;
  // To keep track of highest 
  let rankCount = 0;
  let finalNum = 0;
  arr.forEach( (e) => {
    // For checking the numbers and gets the count of each number
    arr.forEach( (index) => {
      if( e === index){
        count++;
        rankNum = e;
      }
    })
    // If the current count is higher, occuring more frequently than replace then necessary numbers
    if(rankCount < count){
      finalNum = rankNum;
      rankCount = count;
    }
    count = -1;
  })
  return finalNum;
}
