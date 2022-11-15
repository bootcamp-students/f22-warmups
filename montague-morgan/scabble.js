function scramble(str1, str2) {
    var count = Object.create(null);

    Array.prototype.forEach.call(str1, function(a) {
        count[a] = (count[a] || 0) + 1;
    });

    return Array.prototype.every.call(str2, function(a) {
        return count[a]--;
    });
}



// // split each string into an array


// function scramble(str1, str2) {
//   console.log(str1[2])
//   let x = 0
//   let arr1 = str1.split('')
//   let arr2 = str2.split('')
//   for(let i = 0; i < arr2.length; i++){
//     if(arr1.includes(arr2[i])){
//       x = x + 1;
//     }
// }
// console.log('This is x count ' + x)
// console.log('This is arr2 length ' + arr2.length)  
//   if(x === arr2.length){
//     console.log(true)
//     return true
//   } else{
//     return false
//   }
  
// }
