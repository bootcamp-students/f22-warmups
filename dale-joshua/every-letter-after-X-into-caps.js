var makeEveryLetterAfterXCaps = function (str, letter) {
  
let arr = str.split('')
// console.log(arr)

  for (let i=0; i<arr.length; i++) {
    if (arr[i - 1] === letter) {
      arr[i] = arr[i].toUpperCase();
      };
  } 
    return arr.join('')
  
  
};
