// loop through the string
// else if str containes _ or - split with "_" or "-"

function toCamelCase(str){
  
  let newStr = []
  
  function upperCase(str){
    for(let i = 0; i < str.length; i++){
      str[i][0] = str[i][0].toUpperCase()
      if(i == 0){
        newStr.push(str[0])
      } else{
        let letter = str[i][0].toUpperCase()
        let wrd = str[i].replace(str[i][0], letter)
        newStr.push(wrd)
      }
    } return newStr
  }
    
    if (str.includes('-')) {
      str = str.split('-')
      upperCase(str)
      return newStr.join('')
    }else if (str.includes('_')) {
      str = str.split('_')
      upperCase(str)
      return newStr.join('')
    } else if(!str) {
      return ''
    } 
}
    

