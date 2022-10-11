function DNAStrand(dna){
  
    let str = dna.split("");
  let dnaStr = [];
    
    console.log(str);
    str.forEach((char) => {
      console.log(char)
      if (char.includes("A")) {
       dnaStr.push("T");
        console.log('if A evaluates')
        } else if (char.includes("T")) {
          dnaStr.push("A");
          console.log(char)
        } else if (char.includes("C")) {
         dnaStr.push("G");
          console.log(char)
       } else if (char.includes("G")) {
         dnaStr.push("C");
         console.log(char)
       }
        
    } )
  console.log(dna);
    return dnaStr.join("")
  
    
  }
