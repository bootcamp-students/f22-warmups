function absentVowel(x){
    let idx =[];
    //declare vowel array
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    console.log(vowels);
    //split given string into its own array
    x = x.toUpperCase();
    console.log(x);
    //for every element in vowels
    for (const vowel of vowels){
    //use indexOf method to find which element in vowels is = -1
    let isVowel = x.indexOf(vowel);
    //If isVowel = -1
      //return i
    console.log(isVowel);
    if (isVowel === -1) {
    return vowels.indexOf(vowel);
    }
    }
    
    }