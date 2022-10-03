/*
String is never empty
Need shortest words
Loop through x
convert to an array (split?) x
test each word for length x
push values into new array
compare lengths (nice)
return samllest value
*/

function findShort(s) {
  let arr = s.split(' ');
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {   
    newArr.push(arr[i].length);
  } return Math.min(...newArr);
}