// Create an empty string
// Step through each character of the string and check for the pairs
// Catanate the correct letter to the new DNA
// FOOL I DID THIS KATA BEFORE I EVEN STEPPED INTO THE ROOM HAHAHAHHAHAHAHAHHHAH

function DNAStrand(dna){
  let newStr = '';
  for(let char of dna){
    if(char === 'A')
      newStr += 'T';
    else if(char === 'T')
      newStr += 'A';
    else if(char === 'G')
      newStr += 'C';
    else
      newStr += 'G';
  }
  return newStr;
}
