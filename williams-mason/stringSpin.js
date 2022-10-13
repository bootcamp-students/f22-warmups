function spinWords(string){
    let backwards = [];
    let words = string.split(' ');
    words = words.forEach(word => {
      if(word.length <=4){
        backwards.push(word);
      }
      if(word.length >= 5){
        let letters = word.split('');
        letters.reverse();
        console.log(letters);
        letters = letters.join('');
        console.log('afterJoin', letters);
        backwards.push(letters);
        return;
      }
    });
    console.log(backwards);
    backwards = backwards.join(' ');
    return (backwards);
  //   console.log(words);
  //     return (words)
  }