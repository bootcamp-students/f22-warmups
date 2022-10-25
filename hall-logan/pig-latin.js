// 


function pigIt(str){
  let splitted = str.split(' ')
  let firstLetter = ''
  let name = []
  splitted.forEach((item) => {
    if ((item === '!') || (item === '?')){
      firstLetter = item.slice(0, 1)
     let hey = item.slice(1)
     name.push(hey + firstLetter)
      
    } else {
      firstLetter = item.slice(0, 1)
      let hey = item.slice(1)
      name.push(hey + firstLetter + 'ay')
    }
    
  })
  return name.join(' ')
}
