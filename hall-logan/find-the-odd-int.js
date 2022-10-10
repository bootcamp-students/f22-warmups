```/*
sort the array
create a SET of unique values
loop through original array and log 1st and last index of each unique value
compare indexes
if there is an even amount of indexes between them log that value as return
*/
function findOdd(A) {
  A = A.sort();
  let ASET = new Set(A);
  let A1 = Array.from(ASET);
  let index = 0;
  for (let i = 0;i < A1.length; i++) {
    if (((A.lastIndexOf(A1[i]) - (A.indexOf(A1[i]))) % 2) == 0) {
      index = (A.indexOf(A1[i]))
      break;
    }
  } return A[index]
}
