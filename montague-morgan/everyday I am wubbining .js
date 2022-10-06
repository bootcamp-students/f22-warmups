function songDecoder(song){
  
const songArray = song.split("WUB");
  console.log(songArray)
  
  const results = songArray.filter(element => {
  return element.length !== 0;
});
  // This filters out all the '' by checking if they are present if true filter out
  
  
  let newString = results.join(' ')
  console.log(newString)
  return newString

  // ...
}

// I can split the string into an array without any WUBS
// Then join the arrayinto a string with spaces
// however with multiple empty '' spaces breaks it
// this is tried to be fixed with trimming but that only works at start and end
// now I will try to filter which has a function run through it
