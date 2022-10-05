/*
set a new array
loop through given array
test for the data type of each value
if type is a number push to new array
*/

function filter_list(l) {
    let numArr = new Array;
    l.forEach(item => {
      if ((typeof item) == 'number') {
        numArr.push(item);
      }
    }) 
    return numArr;
  }