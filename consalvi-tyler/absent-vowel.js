//switch x to lower case
// loop through array and check if string missing value from the array
// if missing return index of value

function absentVowel(x){
    x = x.toLowerCase()
    let vowels = ['a', 'e', 'i', 'o', 'u']
    for (let i = 0; i <= vowels.length; i++) {
      if (x.indexOf(vowels[i]) == -1)
        return i;
    }
  }