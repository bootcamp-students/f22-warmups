/*I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
P.S. Each array includes only integer numbers. Output is a number too.*/

//Loop through the first array
function arrayPlusArray(arr1, arr2) {
    let total = 0;
    for(let i = 0; i < arr1.length; i++) {
        total += arr1[i];
  //Loop through the second array    
    }  
    for(let j = 0; j < arr2.length; j++) {
        total += arr2[j];
    }
  //Return the sum of both arrays
    return total;//return arr1 + arr2;
  };
  //test
  console.log(arrayPlusArray([2,4,5,6],[1, 2]));
