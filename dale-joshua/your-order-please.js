function order(words) {
  const findNumber = words.match(/[1-9]/g);
  let arr = words.split(' ');
  let empty = [];

    arr.forEach(word=>{
    let x = word.split('')
    let num = x.find(el=>parseInt(el))
    console.log(num)
    empty.push([word,parseInt(num)]) 
  })
  console.log(empty)
 empty.sort((a, b) => a[1]- b[1]).map(el => el.splice(1, 1));
  
 let final = empty.join(' ');
return final;
  }
