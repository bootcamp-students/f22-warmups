function DNAStrand(dna){
  //your code here
  let newStrand = {
    "A" : "T",
    "T" : "A",
    "G" : "C",
    "C" : "G",
  }
  
  return dna.replace(/A|T|G|C/g, function(dnaMatch) {
     return newStrand[dnaMatch];
    });
}
