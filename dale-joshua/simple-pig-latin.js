function pigIt(str){
  let array = str.split(' ');
  let newArray = []
  for (const item of array) {
    if (item.includes('!') || item.includes('?')) {
      newArray.push(item)
      } else {
   let latin = item.substring(1) + item[0] + 'ay'
   newArray.push(latin)
      }
  }
  return newArray.join(' ')
