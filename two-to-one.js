// split the string into an array
// then we are using sort to alphabatize it
// loop through the new array and return only one of each letter

function longest(s1, s2) {return [... new Set (s1.concat(s2).split('').sort())].join('')}
