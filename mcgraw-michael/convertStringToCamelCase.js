function toCamelCase(str){
  
  let newStr = str;
  if (str === '') {
    return '';
  }
  
  for (i = 0; i < str.length; i++) {
    
    if (str[i] === '-') {
      console.log(str[i]);
       newStr = newStr.replace(`-${str[i+1]}`,str[i+1].toUpperCase());
        console.log(newStr)
      } 
    if (str[i] === '_') {
      console.log(str[i]);
       newStr = newStr.replace(`_${str[i+1]}`,str[i+1].toUpperCase());
    
    

}}  return newStr
  }
