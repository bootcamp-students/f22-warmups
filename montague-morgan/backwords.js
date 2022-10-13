function spinWords(string){
    let HI_KEITH_HOPE_YOUR_DAY_IS_MEH = [];
    let words = string.split(' ');
    words = words.forEach(word => {
      if(word.length <=4){
        HI_KEITH_HOPE_YOUR_DAY_IS_MEH.push(word);
      }
      if(word.length >= 5){
        let letters = word.split('');
        letters.reverse();
        console.log(letters);
        letters = letters.join('');
        console.log('afterJoin', letters);
        HI_KEITH_HOPE_YOUR_DAY_IS_MEH.push(letters);
        return;
      }
    });
    console.log(HI_KEITH_HOPE_YOUR_DAY_IS_MEH);
    HI_KEITH_HOPE_YOUR_DAY_IS_MEH = HI_KEITH_HOPE_YOUR_DAY_IS_MEH.join(' ');
    return (HI_KEITH_HOPE_YOUR_DAY_IS_MEH);
