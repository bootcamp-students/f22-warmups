// split string to array
//map through and reverse order of index if >= 5
//join with new string

function spinWords(string){
  let arr = string.split(' ');
  let newStr = '';
  arr.map((el,i) => {
    if (el.length >= 5){
      arr[i] = el.split('').reverse().join('');
    } else {
      arr[i] = el;
    }
    newStr = arr.join(' ')
  })
  return newStr;
}
