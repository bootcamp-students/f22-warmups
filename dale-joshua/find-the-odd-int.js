function findOdd(A) {
  let appears = 0;
  let count = 0;
  let arr = A.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    for (let x = 0; x < arr.length; x++) {
      if (arr[i] == arr[x]) {
        appears++;
      }
    }
    if (appears % 2 !== 0) {
      return arr[i];
    }
  }
}
