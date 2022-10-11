// Can't use replaceAll
// Have to replace the letters with lowercase so they don't get recognized in further replaces

function DNAStrand(dna){
  let string1 = dna.replace(/T/g, "a");
  let string2 = string1.replace(/A/g, "t");
  let string3 = string2.replace(/G/g, "c");
  let string4 = string3.replace(/C/g, "g");
  return string4.toUpperCase();
}
