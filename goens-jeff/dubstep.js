// pseudocode

// Use split method to remove "WUB" character
// Split method splits string into an array of substrings including empty strings
// Filter out empty string values
// Join remaining array values by adding an empty space



function songDecoder(song){
  let newLyrics = song.split("WUB").filter(Boolean).join(' ');
  console.log(newLyrics)
  
  return newLyrics 
}
