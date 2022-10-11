function DNAStrand(dna){
  //your code here
  let returnString = "";
  console.log("Incoming string: ", dna)
  //dna.forEach(replaceWithCompliment);
  
  //function replaceWithCompliment(letter) {
  
  for (let i=0; i< dna.length; i++) {
  
    let letter = dna[i];
  
    if (letter == "A") {
      returnString = returnString + "T";
    } else if (letter == "T") {
      returnString = returnString + "A";
    } else if (letter == "C") {
      returnString = returnString + "G";
    } else if (letter == "G") {
      returnString = returnString + "C";
    } else {
      returnString = returnString + (letter);
    }
  }
  console.log(returnString);
  return(returnString);
}
