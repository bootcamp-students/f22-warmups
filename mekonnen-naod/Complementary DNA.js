// replace all A's with T's
// replace all G's with C's
// replace all letters with their complimentary
// run a for loop to iterate through the strings
// use conditionals to replace the letters with their complementaries(ex. if dna[i] = A, then result is T)

function DNAStrand(dna){

  let result = '';
  for (let i=0; i<dna.length; i++) {
    if (dna[i] == 'A') {
      result += 'T';
      } else if (dna[i] == 'T') {
        result += 'A';
        } else if (dna[i] == 'C') {
          result += 'G';
          } else if (dna[i] == 'G') {
            result += 'C';
            }
    }
    return result;
}
