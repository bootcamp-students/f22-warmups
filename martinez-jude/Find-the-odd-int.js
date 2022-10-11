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

//START
// FUNC findOdd() PARAM(A) - an array of numbers
// SET num = A.length
// FOR Condition (SET i = 0; i < num; i++
// SET count = 0
// FOR Condition (SET j = 0; j < num; j++)
// IF (A[i] == A[j])
// count++
// FOR END
// IF (count % 2 !== 0)
// RETURN A[i]
// FOR END
