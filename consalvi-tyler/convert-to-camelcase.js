/*
set empty arr for new arr
create function to apply to array to uppercase 1st letter of each word
if i = 0 DONT UPPERCASE
if contains '-' or '_' split at character
apply function
profit
*/

function toCamelCase(str){

  let newStr = []
  
  function upperCase(str) {
    for (let i = 0; i < str.length; i++) {
      if (i == 0) {
        newStr.push(str[0])
      } else {      
      let letter = str[i][0].toUpperCase();
      let wrd = str[i].replace(str[i][0], letter)
      newStr.push(wrd)
        }
    } return newStr
  }
  
  if (str.includes('-')) {
    str = str.split('-')
    upperCase(str);
    return newStr.join('')
  } else if (str.includes('_')) {
    str = str.split('_')
    upperCase(str);
    return newStr.join('')
  } else if (!str) {
    return ''
  }
}
