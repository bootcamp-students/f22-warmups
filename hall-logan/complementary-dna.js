// split string into an array
// loop through the length of the array
// use a switch case to checko if its it's counterpart
// join them together to use a string


function DNAStrand(dna){
  //your code here
  dna = dna.split('');
  let newArray = []
  for (let i = 0; i < dna.length; i++){
    switch (dna[i]) {
      case 'A':
        newArray.push('T');
        break;
      case 'T':
        newArray.push('A');
        break;
      case 'C':
        newArray.push('G')
        break;
      case 'G':
        newArray.push('C')
        break;
      }
  }
    return newArray.join('')
}
