

var makeEveryLetterAfterXCaps = function (str, letter) {
  let arr = str.split('')
  for (let i=0; i<arr.length; i++){
    if (arr[i] === letter && arr[i + 1]){
    arr[i + 1]  = arr[i+1].toUpperCase()  
    }
   }
  return arr.join('')
  }
