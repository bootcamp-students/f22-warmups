function songDecoder(song){
    let dubArray = song.split('WUB');
     console.log(`original split: ${dubArray}`);
     let lyricArray = [];
     dubArray.forEach((lyric) => {
      if (lyric !== '') {
        lyricArray.push(lyric);
      }
     })
     return lyricArray.join(' ');
   }
