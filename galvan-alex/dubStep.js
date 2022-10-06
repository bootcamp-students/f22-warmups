function songDecoder(song){
  let noSpace = song.replace(/WUB/g," ");
  let noDouble = noSpace.replace(/ {1,}/g," ");
  return noDouble.trim()
}
