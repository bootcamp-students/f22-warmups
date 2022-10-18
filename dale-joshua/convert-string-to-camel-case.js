// capitalize each letter after '-' || '_'
// return array
// loop through each character and remove '-' || '_'

function toCamelCase(str){
let arr = str.split('')
console.log(arr)

  for (let i=0; i<arr.length; i++) {
    if (arr[i - 1] === '_' || arr[i - 1] === '-') {
      arr[i] = arr[i].toUpperCase();
      };
  } 
  
    var i = 0;
  while (i < arr.length) {
    if (arr[i] === '_' || arr[i] === '-') {
      arr.splice(i, 1);
    } else {
      ++i;
    }
  }
  
return arr.join('')
