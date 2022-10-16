function spinWords(string){
  
  function reverseWord(str) {
      let newStr = ''
      for(let i = str.length - 1; i >= 0; i--){
        newStr = newStr + str[i]
      }
      return newStr
  }
  
  let strArray = string.split(' ')
  for(let i = 0; i < strArray.length; i++){
    if(strArray[i].length >= 5){
      strArray[i] = reverseWord(strArray[i])
    }
  }
  let returnStr = strArray.join(' ')
  return returnStr
}
