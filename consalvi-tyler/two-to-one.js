/*
split string into an arry
sorting the letters
loop through the array and only return the first occurence of each letter
*/

function longest(s1, s2) { return s1 = [... new Set(s1.concat(s2).split('').sort())].join(''); }