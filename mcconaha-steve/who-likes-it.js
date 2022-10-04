function likes(names) {
  //switch case
  // case array.length === 0
  //  return "no one likes this"
  // case array.length === 1 
  //  return "name[0] likes this"
  // case array.length === 2
  //  return name[0], name[1] and name[2] like this
  // case array.legnth === 3
  //  return name[0], name[1], name[2] and name[3] like this
  // case array.length >= 4
  //  return name[0], name[1] and array.length - 2 like this

switch (names.length) {
  case 0:
      return `no one likes this`;
  case 1:
      return `${names[0]} likes this`
  case 2:
      return `${names[0]} and ${names[1]} like this`
  case 3:
          return `${names[0]}, ${names[1]} and ${names[2]} like this`
  default:
          return `${names[0]}, ${names[1]} and ${names.length - 2} others like this` 
};

  
}
