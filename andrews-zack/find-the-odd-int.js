function findOdd(A) {
  let answer = 0;
  let n = 0;
  let arr = [];
  for (let i = 0; i < A.length; i++){
    n = A[i];
    A.forEach((item) => {
      if (n === item) {
        arr.push(item);
      }
    })
    if(arr.length % 2 === 1) {
        answer = n;
    }
    arr = [];
  }
  return answer;
}
