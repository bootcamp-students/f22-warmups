 function findOdd(A) {
    let arr = [];
    for (i = 0; i <= A.length; i++) {
     arr.push(A.filter(x => x==A[i]));
      console.log(arr[i].length);
      console.log(arr[i]);
      console.log(arr[i][0]);
      console.log(arr[i].length % 2 !== 0);
      if (arr[i].length % 2 !== 0) {
        console.log('found an odd');
        return arr[i][0];
       }
      }
  }
   
