function absentVowel(x){
  let missingVowel;
  const vowels = ['a','e','i','o','u'];
  vowels.forEach((vowel) =>{
    if(!x.includes(vowel)){
     missingVowel = vowels.indexOf(vowel)
    }
  })
  return missingVowel;
}
