function DNAStrand(dna){
    let dnaMatch = '';
    for (let i = 0; i <dna.length; i++){
      if (dna[`${i}`] === 'A'){
        dnaMatch += 'T';
      }
      if (dna[`${i}`] === 'T'){
        dnaMatch += 'A';
      }
      if (dna[`${i}`] === 'C'){
        dnaMatch += 'G';
      }
      if (dna[`${i}`] === 'G'){
        dnaMatch += 'C';
      }
      console.log(dnaMatch);
  }
      return dnaMatch;
}