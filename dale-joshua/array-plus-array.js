function arrayPlusArray(arr1, arr2) {
    // define array1
    //   let arr1 = [];
    // define array2
    //   let arr2 = [];
    // for loop push values?
//     let sum = 0;
//     for (let i = 0; i < arr1.length; i++)
//         sum += arr1[i]
//     for (let i = 0; i < arr2.length; i++)
//         sum += arr2[i]
//     return arr1 + arr2; //something went wrong
// }

var sum = 0;
for (var i of arr1){
  sum += i;
}
  
  for (var i of arr2){
  sum += i;
}

return sum
  }
  
