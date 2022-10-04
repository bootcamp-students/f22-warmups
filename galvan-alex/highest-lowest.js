//split into an arr
// cast as ints
//sort nums in arr
// reutn largest and lowest as string seperated by space

function highAndLow(numbers){
  
  const stringNumbers = numbers.split(' ')
  let intNumbers = []
  stringNumbers.forEach((stringNumber) => {
    intNumbers.push(parseInt(stringNumber))
  })
const orderedNumbers = intNumbers.sort((a,b) =>{return  b - a});

const highestNumber = orderedNumbers[0];
const lowestNumberIndex = orderedNumbers.length -1
 
let lowestNumber = orderedNumbers[lowestNumberIndex]

return `${highestNumber} ${lowestNumber}`
  
}
