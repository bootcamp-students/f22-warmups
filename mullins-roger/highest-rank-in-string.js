function highestRank(arr){
//Your Code logic should written here
  
  var count = -1;
  var count2 = 0;
  var finNum = 0;
    arr.forEach((e) => {
      arr.forEach((index) => {
       if (index == e) {
          count++
        }
      })
      if (count > count2) {
      finalNum = e;
      count2 = count
    }
    count = -1;
  })
  return finalNum;
}
