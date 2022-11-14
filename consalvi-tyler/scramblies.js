function scramble(str1, str2) {

  str1 = str1.split('')
  str2 = str2.split('')

  for (let i = 0; i < str2.length; i++) {
    if (str1.includes(str2[i])) {
      
      let str1_letter_count = str1.filter(x => x == str2[i]).length
      let str2_letter_count = str2.filter(x => x == str2[i]).length

      if (str1_letter_count >= str2_letter_count) {
        str1 = str1.filter(letter => letter !== str2[i])
        str2 = str2.filter(letter => letter !== str2[i])
        i--
      } else { 
        return false 
      }
      continue 
    } else {
      return false
    }
  }
  return true;
}
