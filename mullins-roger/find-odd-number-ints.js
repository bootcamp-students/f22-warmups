function findOdd(A) {
  //happy coding!
  
  function countInstances(testCase) {
  
  let count = 0;
  
  for (i = 0; i<A.length; i++) {
    if (A[i] == testCase) {
      count++;
    }
  }
  console.log("There are ", count, " instances of ", testCase);
    return count;
  }
  
  console.log("Array in: ", A);
  
  for (let i = 0; i<=A.length; i++) {
    let testCase = A[i];
    let totalCount = countInstances(testCase);
    if (totalCount % 2 == 1) {
      return testCase;
    }
  }
  

  }
