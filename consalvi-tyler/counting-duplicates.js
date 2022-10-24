/*
take the sting and all to lowercase, split into an array, sort the order
set iterable for count
set iterable for duplicate count
loop through the array
  IF 
    text[i] matches text[i + 1]
      count ++
  ELSE IF
    text[i] does not match text[i + 1] AND count > 0
      increment value duplicate
  return duplicates
*/

function duplicateCount(text) {
  text = text.toLowerCase().split('').sort()
  let count = 0
  let duplicates = 0
  for (let i = 0; i < text.length; i++) {
    if (text[i] === text[i + 1]) {
      count++
    } else if ((count > 0)&&(text[i] !== text[i+1])) {
      duplicates ++
      count = 0
    }
  }
  return duplicates
}
