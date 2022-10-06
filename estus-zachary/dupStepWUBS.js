function songDecoder(song){
  return song.split('WUB').filter(item => item != '').join(' ');
}
