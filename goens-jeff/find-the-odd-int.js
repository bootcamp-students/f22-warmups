// pseudocode

// loop through array
// use filter method to create a new array that matches the iterated value
// use length to find the number of duplicates
// use if statement to check if newArray is an odd number


function findOdd(A) {
  for(let i = 0; i <= A.length; i++) {
  const newArray = A.filter(value => value === A[i]).length;
  if (newArray % 2 == 1) {
    return A[i]
    }
  }
}
