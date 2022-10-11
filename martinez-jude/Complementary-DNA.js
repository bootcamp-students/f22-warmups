function DNAStrand(dna){
  let str = '' 
  for(let i = 0; i < dna.length; i++){
    if(dna[i] == 'A'){
      str = str + 'T'
    }else if(dna[i] == 'T'){
      str = str + 'A'
    }else if(dna[i] == 'G'){
      str = str + 'C'
    }else if(dna[i] == 'C'){
      str = str + 'G'
    }
  }
  console.log(str)
  return str
}
