function longest(s1, s2) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let newString = s1 + s2
  let answerStr = ''
  for(let i = 0; i < alphabet.length; i++){
    if (newString.includes(alphabet[i])){
      answerStr = answerStr + alphabet[i]
    }
  }
  return answerStr
}
