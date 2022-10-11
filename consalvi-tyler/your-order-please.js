/*
split into an array
forEach word
loop i for words.length
if includes value of i push to new array
return array joined ' '
*/

function order(words){
    let order = new Array;
    words = words.split(' ');
    for (let i = 0; i <= words.length; i++) {
      words.forEach(word => {
        if (word.includes(i)) {
            order.push(word)
            }
        }) 
    } return order.join(' ');
  }