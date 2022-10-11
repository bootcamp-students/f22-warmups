function DNAStrand(dna){
  let dnaMatch = ''
  for (let i = 0; i<dna.length; i++){
    if (dna[`${i}`] === 'A'){
    dnaMatch+='T'
     }
    if (dna[`${i}`] === 'T'){
    dnaMatch+='A'
     }
      if (dna[`${i}`] === 'G'){
    dnaMatch+='C'
     }
      if (dna[`${i}`] === 'C'){
    dnaMatch+='G'
     }
    }
    return dnaMatch
}

// let dnaMatch equal an empty string
// loop through dna, if dna equals A
// Add a T to the dnaMatch
//if dna equals T
// Add a A to the dnaMatch
// if dna equals G
// Add a C to the dnaMatch
// if dna equals C
// Add a G to the dnaMatch
