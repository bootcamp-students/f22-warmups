function longest(str) {
  let str1 = ''
  let str2 = str[0]
  let preChar = ''
  let currentChar = ''
  let array = []
  let abc = 'abcdefghijklmnopqrstuvwxyz'
  for(let i = 0; i < str.length; i++){
    currentChar = str[i]
    if (i == 0){
      currentChar = str[i]
      str1 = str1 + currentChar
    }
    if (i !== 0){
      preChar = str[i - 1]    
      let indexcheck = abc.indexOf(preChar) <= abc.indexOf(currentChar)
      if (indexcheck){
        str1 = str1 + currentChar
      }   
      if (str1.length > str2.length){
        str2 = str1
      }
      if(!indexcheck){
          str1 = currentChar
        }
      }
  }
  return str2
}
