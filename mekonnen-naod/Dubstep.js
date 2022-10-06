//  input is a non empty string of length no more than 200
//  split the string into an array at 'WUB'
//  remove the empty space using filter method
//  join the split array into a string
//  return the joined string

  function songDecoder(song){

  let split = song.split('WUB');
  console.log(split)
  let removed = split.filter(Boolean);
  console.log(removed)
  let joined = removed.join(' ');
   
  return joined;
  }
