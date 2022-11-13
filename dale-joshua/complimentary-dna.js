function DNAStrand(dna){
  let strand = dna.split('')
  let newStrand = []
  for (let item of strand){
    switch(item){
        case 'A': newStrand.push('T')
          break;
        case 'T': newStrand.push('A')
          break;
        case 'G': newStrand.push('C')
          break;
        case 'C': newStrand.push('G')
          break;
    }
  }
  return newStrand.join('')
}
