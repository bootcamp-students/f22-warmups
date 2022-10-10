// Forgot to grab my solution, was looking at rodgers because of the while loop boolean
// Solved mine using split by "WUBWUB" then "WUB"
// Then looped through that array and if the index value contained a string I pushed to a new array, then joined at the end with " "
function songDecoder(song){
  // ...
  let keepLooping = true;
  
  while (keepLooping) {
    if (song.includes("WUBWUB")) {
        song = song.replace("WUBWUB", " ")
        } else if (song.includes("WUB")) {
          song = song.replace("WUB", " ")
        } else {
          keepLooping = false;
        }
  }
  
  keepLooping = true;
  
  while (keepLooping) {
    if (song.includes("   ")) {
        song = song.replace("   ", " ")
        } else if (song.includes("  ")) {
          song = song.replace("  ", " ")
        } else {
          keepLooping = false;
        }
  }
  
  song = song.trim();
//   song = song.replace("  ", " ");
  return song;
}
