function likes(names) {
  if (names.length == 0){
    return 'no one likes this'
  }
  if (names.length == 1){
    return names[0] + ' likes this'
  }
  if (names.length == 2){
    return names[0] + ' and ' + names[1] + " like this"
  }
  if (names.length == 3){
    return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'
  }
  if (names.length > 3){
    return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this'
  }
}
  
  
  
//   return names.length == 0 ? 'no one likes this'
//         : names.length == 1 ? names[0] + ' like this'
//         : names.length == 2 ? names[0] + ' and ' + names[2] + " like this"
//         : names.length == 3 ? names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'
//       //  : names.length > 3 ? const
// 



// names comes as an array

// if name == 1
// return name[0] + likes this

// if name == 2
// name[0] name[1] likes this

// if name == 3
// return name[0] + ',' +name[1] name[3] likes this

// if name > 3 
// set var string = name.shift() + ',' + name.shift() + name.length() + others like this.
// return string

// else 
// return 'no one likes this'
// 
