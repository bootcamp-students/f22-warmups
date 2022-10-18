// implement a function that takes as argument a sequence and returns a list of items without
// any elements with the same value next to each other and preserving the original order of elements
// create an empty array and set to a new variable
// run a for loop to iterate through iterable
// use a conditional to check if and item in the index and the next item are equal
// if unequal return i

var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
console.log(iterable)
  
  let arr = [];
  for(let i=0; i<iterable.length; i++){
    if (iterable[i] !== iterable[i+1]){
      arr.push(iterable[i])
    }
  }
  return arr;

}
