// Establish an array of vowels for the for loop to run through 
// .includes method naturally outputs a boolean
// Since the problem asks us to return the index, we can use the i from the for loop as the return

function absentVowel(x){
let vowelArr = ['a', 'e', 'i', 'o', 'u'];
  for(let i = 0; i < x.length; i++) {
    if(!(x.includes(vowelArr[i]))) {
       return i;
    } 
  }
}
