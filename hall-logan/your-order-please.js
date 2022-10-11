// split it into an array
// forEach through the word
// loop through word.length
// if it includes value of i push into new array
// return array joined


function order(words){
  // ...
//   console.log(words)
  let order = [];
  words = words.split(' ');
  
    for(let i = 0; i <= words.length; i++) {
      words.forEach(word => {
        if (word.includes(i)) {
            order.push(word)
          console.log(order)
        }
      })
    }
  return order.join(' ')
}
