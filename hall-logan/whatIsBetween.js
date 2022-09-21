function between(a, b) {
  // your code here
//   if "a" is lees than "b" than ++ or loop through 
//   once a == b than stop
//   have an empty array that we return
  let resultArray = []
  for(let i = a; i <= b; i++) {
    resultArray.push(i)
  }
  return resultArray
}
