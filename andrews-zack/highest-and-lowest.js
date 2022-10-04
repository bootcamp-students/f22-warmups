// split string into array
// parse string into numbers
// sort numbers from greatest to least
// return highest number and lowest number

function highAndLow(numbers){
  const stringNumbers = numbers.split(' ');
  let intNumbers = [];
  stringNumbers.forEach((stringNumber) => {
    intNumbers.push(parseInt(stringNumber))
  })
  const orderedNum = intNumbers.sort((a,b) => {return b - a});
  const highNum = orderedNum[0];
  const lowNum = orderedNum[(orderedNum.length - 1)];
  return `${highNum} ${lowNum}`;
}
