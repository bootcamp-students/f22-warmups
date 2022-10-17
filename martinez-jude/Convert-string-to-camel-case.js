function toCamelCase(str){
  function capstring (str) {
    let newstring = '';
    for (let i = 0; i < str.length; i++) {
      if (i === 0){
          newstring = newstring + str[i].toUpperCase();
          }else{
             newstring = newstring + str[i];
             }
  }
    return newstring;
  }
  let aaaaa = 'hello';
  let arr = []
  if (str.includes('_')) {
    arr = str.split('_');
  } else {
    arr = str.split('-');
  }
  if (str = ''){
    return 'an empty string was provided but not returned';
  }
  for (let i = 1; i < arr.length; i++){
    arr[i] = capstring(arr[i]);
  }
 const returnString = arr.join('');
  return returnString;
}
