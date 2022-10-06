function songDecoder(song){
  let noWub = song.replace(/WUB/g, " ")
  let noDup = noWub.replace(/ {1,}/g, " ");
  return noDup.trim();
}
