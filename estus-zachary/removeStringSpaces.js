// Split the string by spaces
// Then join the string together without the spaces

function noSpace(x){
  let newStr = x.split(' ');
  let str = newStr.join('');
  return str;
}
