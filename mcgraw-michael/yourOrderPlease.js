function order(words){
  let order = [];
  let wordsArray = [];
  if (words === ''){
    return ''
  } else {
//     find value of int in a string
//     use value of that int to sort array of strings
//     extract value of int, make it equal to value of string it was extracted from
//     
    wordsArray = words.split(' ');
    
    for (let i = 1; i <= wordsArray.length; i++) {
      wordsArray.forEach(word => {
        if (word.includes(i)) {
          order.push(word)
        }
      })
    }
    
    return order.join(' ')
    }
  
}
