function spinWords(string){
  let newArray = [];
  let array = string.split(' ')
  console.log(array)
  array.forEach((item) => {
      if (item.length >= 5) {
        console.log(item)
     item = item.split('').reverse().join('')
        }
      newArray.push(item)
  })
  console.log(newArray)
       return newArray.join(' ')       
}
