function findOdd(A) {
  let num = A.length
  for(let i = 0; i < num; i++){
    let count = 0;
    
    for(let j = 0; j < num; j++){
      if(A[i] == A[j]){
        count++
      }
    }
    if(count%2 !== 0){
      return A[i]
    }
  }
}
