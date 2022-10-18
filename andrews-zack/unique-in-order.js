// defensive programming, once everything is an array, if the length is 0 or 1, just return the input
// for any other length array, for each index of the array, if it matches the index before it, push it into a new array

var uniqueInOrder=function(it){
  let keith = [];
  let arr = [];
  if (typeof(it) === 'string') {
    keith = it.split('');
  } else {
    keith = it
  }
  if (keith.length == 0 || keith.length == 1) {
    return keith;
  }
  for (let i = 0; i < keith.length; i++) {
    if (keith[i] !== keith[i-1]) {
      arr.push(keith[i]);
    }
  } return arr
}
