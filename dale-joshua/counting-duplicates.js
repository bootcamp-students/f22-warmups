function duplicateCount(text){
  text = text.toLowerCase();
let counter = 0;
  let empty = []
const arr = text.split('');
 let newarr = arr.sort((a, b) => {
   if (a > b) {
     return 1
   } if (a < b) {
     return -1
   } else {
     return 0
   }
 });
   for (let i = 0; i < newarr.length; i++) {
     if (newarr[i] === newarr[i +1]) {
        empty.push(newarr[i])
     }
   }
  console.log(empty)
   for (let i = 0; i < empty.length; i++) {
     if (empty[i] !== empty[i+1]) {
       counter++
     }
   }
  return counter;
  }
