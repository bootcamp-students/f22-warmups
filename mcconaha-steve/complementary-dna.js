function DNAStrand(dna){
  //given a string
  //IF string index (i) equals A then replace with T
  //ELSE IF string index (i) equals C then replace with G
  //ELSE IF string index (i) equals T then replace with A
  //ELSE IF string index (i) equals G then replace with C
  let newDna = [];
  for (let item of dna) {
    if (item === 'A') {
      newDna.push('T');
    } else if (item === 'T') {
      newDna.push('A');
    } else if (item === 'C') {
      newDna.push('G');
    } else if (item === 'G') {
      newDna.push('C');
    }
  }
  return newDna.join('');
}  
