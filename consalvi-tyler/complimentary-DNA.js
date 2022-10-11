/*
split string into array
for loop to length of the array
switch case to replace each letter with its compliment
*/

function DNAStrand(dna){
    dna = dna.split('');
    let compliment = new Array;
    for (let i = 0; i < dna.length; i++) {
      switch (dna[i]) {
          case 'A':
            compliment.push('T');
            break;
          case 'T':
            compliment.push('A');
            break;
          case 'G':
            compliment.push('C');
            break;
          case 'C':
            compliment.push('G');
            break;
      }
    } return compliment.join('');
  }