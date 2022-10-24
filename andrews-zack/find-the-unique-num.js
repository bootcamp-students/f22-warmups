function findUniq(arr) {
  let newArr =[];
  newArr = arr.sort();
  if (newArr[1] === newArr[0]) {
    return newArr[(newArr.length-1)]
  } else return newArr[0];
}
