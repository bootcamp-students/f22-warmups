/*
Split into array
loop through the array
split each word into an array at the index of [i]
if current value of array is punctuation, just push to ans array with no logic applied
push the value of index 0 to the end of array
delete the index 0
add 'ay'
join word
*/

function pigIt(str){
  str = str.split(' ')
  let ans = [];
  for (let i = 0; i < str.length; i++) {
    let word = str[i].split('')
    if ((str[i] === '!')||(str[i] === '?')) {
      ans.push(str[i])
      str = str.pop()
    } else {
    word.push(word.shift() + 'ay')
    ans.push(word.join(''))}
  }
  return ans.join(' ')
}
