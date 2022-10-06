let song = 'WUBWUBAWUBWUBBWUBCWUBWUBHELLOWUBWUB'
console.log('outsideFuntion', song);
function makeSong(song){
    console.log('insideFunctionBefore', song);
    let newSong = song.replaceAll('WUB', '');
    console.log('afterReplaceAll', newSong);
    let words = newSong.split('');
    console.log(words);

    words.filter(word => word.length > 0);
    console.log(words);
    let finalSong = words.join(' ');
    console.log(finalSong);

}
makeSong(song);