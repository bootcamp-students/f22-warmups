/*
split the string
filter out spaces
join
*/

function songDecoder(song){ return song.split('WUB').filter(item => !item == ' ').join(' ')}