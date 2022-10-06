// 

function songDecoder(song){
  // ...
  let keepLooping = true;
  console.log(song);
  
  while (keepLooping == true) {
    if (song.includes("WUBWUB")) {
        song = song.replace("WUBWUB", " ")
        } else if (song.includes("WUB")) {
          song = song.replace("WUB", " ")
        } else {
          keepLooping = false;
        }
  }
  
  keepLooping = true;
  
  while (keepLooping == true) {
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
  console.log(song);
  return song;
}
