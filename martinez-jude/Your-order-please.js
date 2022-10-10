function order(words){
  let handwave = words.split(' ')
  let num = '';
  let newArray = []
  
  for(let i = 0; i < handwave.length; i++){
    newArray.push('')
  }
  for(let i = 0; i < handwave.length; i++){
    let str = handwave[i]
    for(let j = 0; j < str.length; j++){
      if(isNaN(str[j]) == false){
        num = str[j]
        num = parseInt(num)
        num--
        newArray.splice(num,1,handwave[i])
      }
    }
  }
  return newArray.join(' ')
}
