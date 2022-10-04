// use split to make the string into an array
// grab the index of all the numbers
// get the min using math.min
// get the max using math.max
// make the min and max number into a string

function highAndLow(numbers){
  // ...
  let array = numbers.split(' ')
  console.log(array)
  let max = Math.max(...array).toString()
  let min = Math.min(...array).toString()
  console.log(min)
  console.log(max)
  return `${max} ${min}`
}
