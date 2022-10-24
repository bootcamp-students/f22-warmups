function findUniq(arr) {
//   console.log(arr)
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.lastIndexOf(arr[i]) !== arr.indexOf(arr[i])){
      continue;
    }
//     console.log(arr)
    newArray.push(arr[i])
  }
  return newArray[0];
}
