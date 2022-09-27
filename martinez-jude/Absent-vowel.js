function absentVowel(x){
let vowel = ['a','e','i','o','u'];
  for (let i of vowel){
    if (!x.includes(i)){
      return vowel.indexOf(i)
    }
  }
}

// set array to [a,e,i,o,u]
// .includes returns false if value not found
// for let i of array {}
// if x.includes == false
// returns array.indexOf(i)

