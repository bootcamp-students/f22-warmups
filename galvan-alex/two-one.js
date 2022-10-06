//concat evreything
//multiple letters to 1
// return string

function longest(s1, s2) {
  const arr = (s1 + s2).split("")
  arr.sort()
  let unique = [...new Set(arr)]
  return unique.join('')
}
