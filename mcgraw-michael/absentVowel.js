// vowels = [A,E,I,O,U]
// IF x does not contain A, RETURN vowels[0]
// IF x does not contain E, RETURN vowels[1]
// IF x does not contain I, RETURN vowels[2]
// IF x does not contain O, RETURN vowels[3]
// IF x does not contain U, RETURN vowels[4]

function absentVowel(x){
  
    if (x.includes('a')===false) {
      return 0
    } else if (x.includes('e')===false) {
      return 1
    } else if (x.includes('i')===false) {
      return 2 
    } else if (x.includes('o')===false) {
      return 3
    } else if (x.includes('u')===false) {
      return 4
    }
    
  }
