function findUniq(arr) {
  let x = []
  let y = []
//   loop through each number and check if it is equal to the first index
  arr.forEach((int) => {
    int === arr[0] ? x.push(int) : y.push(int)
//     if equal, push to x, else push to y
  });
//   return first index of whichever array is longer
 return x.length > y.length ? (y[0]) : ( x[0])
}
