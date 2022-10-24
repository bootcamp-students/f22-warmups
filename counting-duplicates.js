
function duplicateCount(text){
  //...
  text = text.toLowerCase().split('').sort()
  let count = 0
  let duplicates = 0
  for (let i =0; i< text.length; i++) {
    if (text[i] === text[i + 1]){
      count++
    } else if ((count > 0)&&(text[i] !== text[i+1])){
      duplicates++
      count = 0
    }
  }
  return duplicates
}
