// pseudocode

// declare new variable equal to filter of list(l)
// use function to compare list items are equal to a number
// return new variable



function filter_list(l) {
  let onlyNumbers = l.filter(list => typeof list === 'number');
  console.log(onlyNumbers)
  return onlyNumbers;
}
